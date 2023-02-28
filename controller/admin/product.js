const Products = require('../../models/product');
exports.AddProduct=(req, res)=>{
  res.render('admin/add-product');
}
exports.postProduct = (req, res)=>{
    const {title, price, image, description} = req.body;
    Products.create({
        title:title,
        price: Number.parseFloat(price),
        image:image,
        description:description
    })
    res.redirect('/admin');
}
exports.updateproduct=(req, res)=>{
   const id = req.params.id
//    Products.findAll({
//     where:{
//         id:id
//     }
//    })
 Products.findByPk(id)
   .then(result =>{
    res.render('admin/product-update', {product: result})
   })
   .catch(err => console.log(err))
}
