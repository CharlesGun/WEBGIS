var express = require('express');
var router = express.Router();
const controller = require("../controllers/index")
const middleware = require("../utils/middleware")
const multer = require('multer')
const upload = multer();

// get
router.get('/', controller.image.getData);
// get by id
router.get('/:id', controller.image.getDataById);
// get by mapId
router.get('/bymap/:mapId', controller.image.getDataByMapId);
// create
router.post('/', middleware.isLogin, upload.single('file'), controller.image.create);
// update
router.put('/:id', middleware.isLogin, upload.single('file'), controller.image.update);
// delete
router.delete('/:id', middleware.isLogin, controller.image.delete);

module.exports = router;