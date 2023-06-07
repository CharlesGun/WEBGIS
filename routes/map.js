var express = require('express');
var router = express.Router();
const controller = require("../controllers/index")
const middleware = require("../utils/middleware")

// get
router.get('/', controller.map.getData);
// get by id
router.get('/:id', controller.map.getDataById);
// create
router.post('/', middleware.isLogin, controller.map.create);
// update
router.put('/:id', middleware.isLogin, controller.map.update);
// delete
router.delete('/:id', middleware.isLogin, controller.map.delete);

module.exports = router;
