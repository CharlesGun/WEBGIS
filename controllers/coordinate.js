const {
    coordinates
} = require('../models');

module.exports = {

    create: async (req, res, next) => {
        const {
            lat,
            lng,
            mapId
        } = req.body
        try {

            let coordinate = await coordinates.create({
                lat: lat,
                lng: lng,
                mapId: mapId

            })

            return res.status(200).json({
                status: true,
                message: 'coordinate created',
                data: coordinate
            });
        } catch (err) {
            next(err)
        }
    },

    getData: async (req, res, next) => {
        try {
            let coordinate = await coordinates.findAll();

            if (!coordinate) {
                return res.status(400).json({
                    status: false,
                    message: 'data not found',
                    data: null
                });
            }
            return res.status(200).json({
                status: true,
                message: 'get data succesful',
                data: coordinate
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


            let coordinate = await coordinates.findOne({
                where: {
                    id: id
                }
            })
            if (!coordinate) {
                return res.status(400).json({
                    status: false,
                    message: 'data not found',
                    data: null
                });
            }
            return res.status(200).json({
                status: true,
                message: 'get data succesful',
                data: coordinate
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


            let coordinate = await coordinates.findAndCountAll({
                where: {
                    mapId: mapId
                }
            })
            if (!coordinate) {
                return res.status(400).json({
                    status: false,
                    message: 'data not found',
                    data: null
                });
            }
            return res.status(200).json({
                status: true,
                message: 'get data succesful',
                data: coordinate
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
            lat,
            lng,
            mapId
        } = req.body;
        try {
            const coordinate = await coordinates.findOne({
                where: {
                    id: id
                }
            })
            if (!coordinate) {
                return res.status(409).json({
                    status: false,
                    message: 'data not found',
                    data: null
                })
            }
            const updated = await coordinates.update({
                lat: lat,
                lng: lng,
                mapId: mapId
            }, {
                where: {
                    id: id
                }
            })

            return res.status(200).json({
                status: true,
                message: 'update coordinate success',
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
            const coordinate = await coordinates.findOne({
                where: {
                    id: id
                }
            })
            if (!coordinate) {
                return res.status(409).json({
                    status: false,
                    message: 'data not found',
                    data: null
                })
            }
            const deleted = await coordinates.destroy({
                where: {
                    id: id
                }
            })

            return res.status(200).json({
                status: true,
                message: 'delete coordinate success',
                data: deleted
            })
        } catch (err) {
            next(err)
        }
    }

}