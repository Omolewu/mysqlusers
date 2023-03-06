const router = require('express').Router();
const pagesController = require('../controller/pages')
router.get('/', pagesController.homePage);
module.exports= router