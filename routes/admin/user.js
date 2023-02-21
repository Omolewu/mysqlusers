const router= require('express').Router();
const adminUserController = require('../../controller/admin/users')

router.get('/add-user', adminUserController.addUser)
router.post('/add-user', adminUserController.postUser)
router.get('/admin', adminUserController.adminHome);
router.get('/update-user/:id', adminUserController.updateuser)
router.post('/update-user', adminUserController.adminUpdate)
router.post('/delete-user', adminUserController.deleteUser)
module.exports=router;