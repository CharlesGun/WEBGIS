const {
    coordinates,
    maps,
    images
} = require('../models');

module.exports = {

    create: async (req, res, next) => {
        const {
            name,
            category,
            description,
            type
        } = req.body
        try {

            let map = await maps.create({
                name: name,
                desc: description,
                category: category,
                type: type
            })

            return res.status(200).json({
                status: true,
                message: 'map created',
                data: map
            });
        } catch (err) {
            next(err)
        }
    },
    getData: async (req, res, next) => {
        try {
            let map = await maps.findAll();

            if (!map) {
                return res.status(400).json({
                    status: false,
                    message: 'data not found',
                    data: null
                });
            }
            return res.status(200).json({
                status: true,
                message: 'get data succesful',
                data: map
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


            let map = await maps.findOne({
                where: {
                    id: id
                }
            })
            if (!map) {
                return res.status(400).json({
                    status: false,
                    message: 'data not found',
                    data: null
                });
            }
            return res.status(200).json({
                status: true,
                message: 'get data succesful',
                data: map
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
            name,
            category,
            description,
            type
        } = req.body;
        try {
            const map = await maps.findOne({
                where: {
                    id: id
                }
            })
            if (!map) {
                return res.status(409).json({
                    status: false,
                    message: 'data not found',
                    data: null
                })
            }
            const updated = await map.update({
                name: name,
                category: category,
                desc: description,
                type: type
            }, {
                where: {
                    id: id
                }
            })

            return res.status(200).json({
                status: true,
                message: 'update map success',
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
            const map = await maps.findOne({
                where: {
                    id: id
                }
            })
            if (!map) {
                return res.status(409).json({
                    status: false,
                    message: 'data not found',
                    data: null
                })
            }
            const coordinate = await coordinates.findAll({
                where: {
                    mapId: map.id
                }
            })
            const image = await images.findAll({
                where: {
                    mapId: map.id
                }
            })
            let i = 0;
            while(image[i]){
                await image[i].destroy();
                i++
            }
            i = 0;
            while(coordinate[i]){
                await coordinate[i].destroy();
                i++
            }
            await map.destroy();

            return res.status(200).json({
                status: true,
                message: 'delete map success'
            })
        } catch (err) {
            next(err)
        }
    }

}