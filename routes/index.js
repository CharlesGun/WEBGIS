var express = require('express');
var router = express.Router();
const coordinate = require('./coordinate')
const map = require('./map')
const user = require('./user')

router.use('/coordinate', coordinate);
router.use('/map', map);
router.use('/user', user);

module.exports = router;
