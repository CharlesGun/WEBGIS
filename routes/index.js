var express = require('express');
var router = express.Router();
const coordinate = require('./coordinate')
const map = require('./map')
const user = require('./user')
const image = require('./image')
const geojson = require('./geojson')

router.use('/coordinate', coordinate);
router.use('/map', map);
router.use('/geojson', geojson);
router.use('/user', user);
router.use('/image', image);

module.exports = router;
