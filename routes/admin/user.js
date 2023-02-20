const router= require('express').Router();
const adminUserController = require('../../controller/admin/users')

router.get('/add-user', adminUserController.addUser)
router.post('/add-user', adminUserController.postUser)
module.exports=router;