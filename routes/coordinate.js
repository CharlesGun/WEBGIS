var express = require('express');
var router = express.Router();
const controller = require("../controllers/index")
const middleware = require("../utils/middleware")

// get
router.get('/', controller.coordinate.getData);
// get by id
router.get('/:id', controller.coordinate.getDataById);
// get by mapId
router.get('/bymap/:mapId', controller.coordinate.getDataByMapId);
// create
router.post('/', middleware.isLogin, controller.coordinate.create);
// update
router.put('/:id', middleware.isLogin, controller.coordinate.update);
// delete
router.delete('/:id', middleware.isLogin, controller.coordinate.delete);

module.exports = router;