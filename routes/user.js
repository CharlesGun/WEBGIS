const express = require('express');
const router = express.Router();
const controller = require('../controllers');


// auth (regis dan login)

router.post('/register', controller.user.register);

router.post('/login', controller.user.login);

router.post('/forgot-pass', controller.user.forgotPass);

router.post('/reset-pass', controller.user.resetPassword);


module.exports = router;
