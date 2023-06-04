const {
    images
} = require('../models');


module.exports = {
    create: async (req, res, next) => {
        const {
            mapId,
            name
        } = req.body
        const file = req.file.buffer.toString("base64");
        try {

            const uploadedFile = await imagekit.upload({
                file,
                fileName: req.file.originalname
            });

            const image = await images.create({
                image: uploadedFile.url,
                mapId: mapId,
                name: name
            },{
                where:{
                    id: image.id
                }
            });

            return res.status(200).json({
                status: true,
                message: 'file uploaded!',
                data: image
            });
        } catch (err) {
            next(err)
        }
    },

    getData: async (req, res, next) => {
        try {
            let image = await images.findAll();

            if (!image) {
                return res.status(400).json({
                    status: false,
                    message: 'data not found',
                    data: null
                });
            }
            return res.status(200).json({
                status: true,
                message: 'get data succesful',
                data: image
            });
        } catch (err) {
            next(err)
        }
    },

    getDataById: async (req, res, next) => {
        const {
            id
        } = req.params;
        try {


            let image = await images.findOne({
                where: {
                    id: id
                }
            })
            if (!image) {
                return res.status(400).json({
                    status: false,
                    message: 'data not found',
                    data: null
                });
            }
            return res.status(200).json({
                status: true,
                message: 'get data succesful',
                data: image
            });
        } catch (err) {
            next(err)
        }
    },

    getDataByMapId: async (req, res, next) => {
        const {
            mapId
        } = req.params;
        try {


            let image = await images.findAndCountAll({
                where: {
                    mapId: mapId
                }
            })
            if (!image) {
                return res.status(400).json({
                    status: false,
                    message: 'data not found',
                    data: null
                });
            }
            return res.status(200).json({
                status: true,
                message: 'get data succesful',
                data: image
            });
        } catch (err) {
            next(err)
        }
    },

    update: async (req, res, next) => {
        const {
            id
        } = req.params
        const {
            mapId,
            name
        } = req.body;
        const file = req.file.buffer.toString("base64");
        try {
            const uploadedFile = await imagekit.upload({
                file,
                fileName: req.file.originalname
            });

            const image = await images.findOne({
                where: {
                    id: id
                }
            })
            if (!image) {
                return res.status(409).json({
                    status: false,
                    message: 'data not found',
                    data: null
                })
            }
            const updated = await images.update({
                image: uploadedFile.url,
                mapId: mapId,
                name: name
            }, {
                where: {
                    id: id
                }
            })

            return res.status(200).json({
                status: true,
                message: 'update image success',
                data: updated
            })
        } catch (err) {
            next(err)
        }
    },

    delete: async (req, res, next) => {
        const {
            id
        } = req.params
        try {
            const image = await images.findOne({
                where: {
                    id: id
                }
            })
            if (!image) {
                return res.status(409).json({
                    status: false,
                    message: 'data not found',
                    data: null
                })
            }
            const deleted = await images.destroy({
                where: {
                    id: id
                }
            })

            return res.status(200).json({
                status: true,
                message: 'delete coordinate success',
                data: image
            })
        } catch (err) {
            next(err)
        }
    }

}