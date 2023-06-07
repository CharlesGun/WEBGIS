var express = require('express');
var router = express.Router();
const controller = require("../controllers/index")

router.get('/:id',controller.geojson.getGeoJSON);

router.get('/', controller.geojson.getAllGeoJSON);

module.exports = router;