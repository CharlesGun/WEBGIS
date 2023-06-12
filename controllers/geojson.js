const {
    coordinates,
    maps,
    images
} = require('../models');

module.exports = {
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
                attributes: {
                    exclude: ["id", 'mapId', 'createdAt', 'updatedAt','imagekitFileId']
                },
                where: {
                    mapId: map.id
                }
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
                    image: image
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
                    image: image
                };
            } else {
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
                    coordinates: [coorValue]
                }
                data.properties = {
                    name: map.name,
                    category: map.category,
                    description: map.desc,
                    image: image
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
    getAllGeoJSON: async (req, res, next) => {
        try {
            let data = {
                type: 'FeatureCollection'
            }
            let features = [];

            let map = await maps.findAll();

            if (!map) {
                return res.status(400).json({
                    status: false,
                    message: 'data not found',
                    data: null
                });
            }

            let i = 0;
            let coor = [];
            let coorResult = [];
            let imgResult = [];
            let img = [];

            while (map[i]) {
                coor[i] = await coordinates.findAll({
                    attributes: {
                        exclude: ["id", 'mapId', 'createdAt', 'updatedAt']
                    },
                    where: {
                        mapId: map[i].id
                    }
                })
                coorResult[i] = coor[i].map(item => [item.lat, item.lng])

                img[i] = await images.findAll({
                    attributes: {
                        exclude: ["id", 'mapId', 'createdAt', 'updatedAt','imagekitFileId']
                    },
                    where: {
                        mapId: map[i].id
                    }
                })
                // imgResult[i] = img[i].map(item => [item.nama, item.image])

                features[i] = {
                    type: "Feature",
                    geometry: {
                        type: map[i].type,
                        coordinates: coorResult[i]
                    },
                    properties: {
                        name: map[i].name,
                        category: map[i].category,
                        description: map[i].desc,
                        images: img[i]

                    }
                }
                i++
            }
            data.features = features;

            return res.status(200).json({
                status: true,
                message: 'get data succesful',
                data: data
            });
        } catch (err) {
            next(err)
        }
    }
}