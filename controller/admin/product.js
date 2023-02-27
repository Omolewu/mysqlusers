const Products = require('../../models/product');
exports.AddProduct=(req, res)=>{
    Products.create({
        title: "Book",
        price: 23.67,
        description:'Hello'
      });
  res.json({success: 'Successful submitted'})
  
}

