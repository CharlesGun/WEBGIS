var express = require('express');
var router = express.Router();
const controller = require("../controllers/index")

// get
router.get('/', controller.image.getData);
// get by id
router.get('/:id', controller.image.getDataById);
// get by mapId
router.get('/bymap/:mapId', controller.image.getDataByMapId);
// create
router.post('/', controller.image.create);
// update
router.put('/:id', controller.image.update);
// delete
router.delete('/:id', controller.image.delete);

module.exports = router;