const {
    users
} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const util = require('../utils/email');

const {
    SIGNATURE_KEY,
    BASE_URL
} = process.env;

module.exports = {
    register: async (req, res, next) => {
        try {
            const {
                username,
                email,
                password
            } = req.body;

            const existUsername = await users.findOne({
                where: {
                    username: username
                }
            })

            const existEmail = await users.findOne({
                where: {
                    email: email
                }
            })

            if (existUsername) {
                return res.status(409).json({
                    status: false,
                    message: 'Username already used!'
                })
            }

            if (existEmail) {
                return res.status(409).json({
                    status: false,
                    message: 'Email already used!'
                })
            }

            const encryptedPass = await bcrypt.hash(password, 10);

            const user = await users.create({
                username,
                password: encryptedPass,
                email
            });

            return res.status(200).json({
                status: true,
                message: 'Register Success!!'
            })
        } catch (err) {
            next(err);
        }
    },

    login: async (req, res, next) => {
        try {
            const {
                username,
                password
            } = req.body;

            const user = await users.findOne({
                where: {
                    username: username
                }
            });

            if (!user) {
                return res.status(400).json({
                    status: false,
                    message: 'User not found!'
                });
            };

            const verify = await bcrypt.compare(password, user.password);
            if (!verify) {
                return res.status(400).json({
                    status: false,
                    message: 'Wrong password!'
                });
            }

            payload = {
                id: user.id,
                username: user.username,
                email: user.email
            }
            const token = jwt.sign(payload, SIGNATURE_KEY)

            return res.status(200).json({
                status: true,
                message: 'Success',
                data: {
                    token: token
                }
            });
        } catch (err) {
            next(err)
        }
    },
    forgotPass: async (req, res, next) => {
        const {
            email
        } = req.body;
        try {
            const user = await users.findOne({
                where: {
                    email: email
                }
            })

            if (user) {
                const payload = {
                    id: user.id
                };
                const token = await jwt.sign(payload, SIGNATURE_KEY);
                const link = `${BASE_URL}/api/user/reset-pass?token=${token}`;

                htmlEmail = await util.getHtml('reset-password.ejs', {
                    name: user.username,
                    link: link
                });
                await util.sendEmail(user.email, 'Reset your password', htmlEmail);
            }

            return res.status(200).json({
                status: true,
                message: 'Check your email for reset password',
            });
        } catch (err) {
            next(err)
        }
    },
    resetPassword: async (req, res, next) => {
        try {
            const {
                token
            } = req.query;

            const {
                new_password,
                confirm_new_password
            } = req.body;

            if (!token) {
                return res.status(400).json({
                    status: false,
                    message: 'Invalid Token'
                });
            }
            if (new_password != confirm_new_password) {
                return res.status(400).json({
                    status: false,
                    message: 'Password doesn\'t match!!'
                });
            }

            const payload = jwt.verify(token, SIGNATURE_KEY);

            const encryptedPassword = await bcrypt.hash(new_password, 10);

            const user = await users.update({
                password: encryptedPassword
            }, {
                where: {
                    id: payload.id
                }
            });

            return res.status(200).json({
                status: true,
                message: 'Update success!!'
            });
        } catch (err) {
            next(err);
        }
    },
    delete: async (req, res, next) => {
        const {
            id
        } = req.params
        try {
            const user = await users.findOne({
                where: {
                    id: id
                }
            })
            if (!user) {
                return res.status(409).json({
                    status: false,
                    message: 'data not found',
                    data: null
                })
            }
            await user.destroy()

            return res.status(200).json({
                status: true,
                message: 'delete user success'
            })
        } catch (err) {
            next(err)
        }
    }
}