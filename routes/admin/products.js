const products = require('../../controller/admin/product')
const router = require('express').Router();
 router.get('/add-product', products.AddProduct);
  router.post('/add-product', products.postProduct);
  router.get('/update-product/:id', products.updateproduct);
  router.post('/update-product', products.productUpdate);
  router.post('/delete-product', products.deleteProduct);
  module.exports = router;