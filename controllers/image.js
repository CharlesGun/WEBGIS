const {
    images
} = require('../models');
const imagekit = require('../utils/imagekit');


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
                imagekitFileId: uploadedFile.fileId,
                nama: name
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
            await imagekit.deleteFile(image.imagekitFileId)
            const updated = await image.update({
                image: uploadedFile.url,
                nama: name,
                imagekitFileId: uploadedFile.fileId
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
            await imagekit.deleteFile(image.imagekitFileId)
            await image.destroy()
            

            return res.status(200).json({
                status: true,
                message: 'delete image success',
            })
        } catch (err) {
            next(err)
        }
    }

}