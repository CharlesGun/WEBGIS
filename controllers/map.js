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

    getGeoJSON: async (req, res, next) => {
        const {
            id
        } = req.params
        try {
            let data = {
                type: 'Feature'
            }
            let imgValue = [];
            let imgResult = [];
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
            let coordinate = await coordinates.findAndCountAll({
                where: {
                    mapId: map.id
                }
            })

            let image = await images.findAndCountAll({
                where: {
                    mapId: map.id
                }
            })
            Object.keys(image).forEach(key => {
                imgResult = image[key]
            });
            imgResult.forEach(element => {
                imgValue = [element.name, element.url]
            })
            

            let coorValue = [];
            let coorResult = [];
            


            if (map.type == 'Point') {
                Object.keys(coordinate).forEach(key => {
                    coorResult = coordinate[key]
                });
                coorResult.forEach(element => {
                    coorValue = [element.lat, element.lng]
                })
                data.geometry = {
                    type: map.type,
                    coordinates: coorValue
                }
                data.properties = {
                    name: map.name,
                    category: map.category,
                    description: map.desc,
                    image: imgValue
                }
            } else if (map.type == 'LineString') {
                Object.keys(coordinate).forEach(key => {
                    let coorResult = coordinate[key]
                    let i = 0;
                    while (coorResult[i]) {
                        coorValue[i] = [coorResult[i].lat, coorResult[i].lng]
                        i++
                    }
                });
                data.geometry = {
                    type: map.type,
                    coordinates: coorValue
                }
                data.properties = {
                    name: map.name,
                    category: map.category,
                    description: map.desc,
                    image: imgValue
                };
            } else {
                Object.keys(coordinate).forEach(key => {
                    let coorResult = coordinate[key]
                    let i = 0;
                    while (coorResult[i]) {
                        coorValue[i] = [coorResult[i].lat, coorResult[i].lng]
                        i++
                        if (i == coordinate.count) {
                            coorValue[i] = [coorResult[0].lat, coorResult[0].lng]
                        }
                    }
                });
                data.geometry = {
                    type: map.type,
                    coordinates: [coorValue]
                }
                data.properties = {
                    name: map.name,
                    category: map.category,
                    description: map.desc,
                    image: imgValue
                }
            }

            return res.status(200).json({
                status: true,
                message: 'get data succesful',
                data: data
            });
        } catch (err) {
            next(err)
        }
    },
    // getAllGeoJSON: async (req, res, next) => {
    //     const {
    //         id
    //     } = req.params
    //     try {
    //         let data = {
    //             type: 'Feature'
    //         }
    //         let map = await maps.findOne({
    //             where: {
    //                 id: id
    //             }
    //         })
    //         if (!map) {
    //             return res.status(400).json({
    //                 status: false,
    //                 message: 'data not found',
    //                 data: null
    //             });
    //         }
    //         let coordinate = await coordinates.findAndCountAll({
    //             where: {
    //                 mapId: map.id
    //             }
    //         })

    //         let value = []
    //         let result = [];


    //         if (map.type == 'Point') {
    //             Object.keys(coordinate).forEach(key => {
    //                 result = coordinate[key]
    //             });
    //             result.forEach(element => {
    //                 value = [element.lat, element.lng]
    //             })
    //             data.geometry = {
    //                 type: map.type,
    //                 coordinates: value
    //             }
    //             data.properties = {
    //                 name: map.name,
    //                 category: map.category,
    //                 description: map.desc
    //             }
    //         } else if (map.type == 'LineString') {
    //             Object.keys(coordinate).forEach(key => {
    //                 let result = coordinate[key]
    //                 let i = 0;
    //                 while (result[i]) {
    //                     value[i] = [result[i].lat, result[i].lng]
    //                     i++
    //                 }
    //             });
    //             data.geometry = {
    //                 type: map.type,
    //                 coordinates: value
    //             }
    //             data.properties = {
    //                 name: map.name,
    //                 category: map.category,
    //                 description: map.desc
    //             };
    //         } else {
    //             Object.keys(coordinate).forEach(key => {
    //                 let result = coordinate[key]
    //                 let i = 0;
    //                 while (result[i]) {
    //                     value[i] = [result[i].lat, result[i].lng]
    //                     i++
    //                     if (i == coordinate.count) {
    //                         value[i] = [result[0].lat, result[0].lng]
    //                     }
    //                 }
    //             });
    //             data.geometry = {
    //                 type: map.type,
    //                 coordinates: [value]
    //             }
    //             data.properties = {
    //                 name: map.name,
    //                 category: map.category,
    //                 description: map.desc
    //             }
    //         }

    //         return res.status(200).json({
    //             status: true,
    //             message: 'get data succesful',
    //             data: data
    //         });
    //     } catch (err) {
    //         next(err)
    //     }
    // },

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
            const updated = await maps.update({
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
            const deleted = await maps.destroy({
                where: {
                    id: id
                }
            })

            return res.status(200).json({
                status: true,
                message: 'delete map success',
                data: deleted
            })
        } catch (err) {
            next(err)
        }
    }

}