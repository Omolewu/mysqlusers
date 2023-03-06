const authController = require('../controller/auth'); 
const router = require('express').Router();
router.get('/login', authController.loginPage);
router.post('/login', authController.login);
router.get('/register', authController.registerPage);
router.post('/register', authController.register);
module.exports= router