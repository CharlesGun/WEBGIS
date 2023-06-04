var express = require('express');
var router = express.Router();
const controller = require("../controllers/index")

// get
router.get('/', controller.map.getData);
// get by id
router.get('/:id', controller.map.getDataById);
// create
router.post('/', controller.map.create);
// update
router.put('/:id', controller.map.update);
// delete
router.delete('/:id', controller.map.delete);
// get geojson
router.get('/geojson/:id', controller.map.getGeoJSON);

module.exports = router;
