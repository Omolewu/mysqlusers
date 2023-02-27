const products = require('../../controller/admin/product')
const router = require('express').Router();
 router.get('/addproduct', products.AddProduct);
module.exports = router;