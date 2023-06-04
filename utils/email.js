const nodemailer = require('nodemailer');
const ejs = require('ejs');
const {email_sender, app_password} = process.env;

module.exports = {
    sendEmail: async (to, subject, html) => {
        return new Promise(async (resolve, reject) => {
            try {

                const transport = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: email_sender,
                        pass: app_password
                    }
                });

                const mailOptions = {
                    to,
                    subject,
                    html
                };

                const response = await transport.sendMail(mailOptions);

                resolve(response);
            } catch (err) {
                reject(err);
            }
        });
    },
    getHtml: (filename, data) => {
        return new Promise((resolve, reject) => {
            const path = __dirname + '/../email/' + filename;

            ejs.renderFile(path, data, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
};