const Products = require('../../models/product');
const user = require('../../models/users');
exports.AddProduct=(req, res)=>{
  res.render('admin/add-product');
}
exports.postProduct = (req, res)=>{
    const {title, price, image, description} = req.body;
   req.user.createProduct(
            {
                     title:title,
                     price: Number.parseFloat(price),
                     image:image,
                     description:description,
                 }
         )
         res.redirect('/admin');
    //  user.findByPk(3).then(user=>{
   //   return user.createProduct(
   //       {
   //                title:title,
   //                price: Number.parseFloat(price),
   //                image:image,
   //                description:description,
   //            }
   //    )


   //   return  Products.create({
   //       title:title,
   //       price: Number.parseFloat(price),
   //       image:image,
   //       description:description,
   //       userId:user.id
   //   })
   //  }).then(product =>{
      
   //  }).catch(err => console.log(err))
   
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
exports.productUpdate =(req, res)=>{
   let {id, title, price, image, description} = req.body;
   Products.findByPk(id).then(product =>{
    product.title = title
    product.price= price;
    product.image=image;
    product.description = description;
    return product.save();
   }).then(product =>{
    res.redirect('/admin')
   }).catch(err => console.log(err))
}
exports.deleteProduct = (req, res)=>{
   const {id} = req.body;
   Products.findAll({
    where:{
      id:id
    }
   }).then(products=>{
    let product = products[0]
   return  product.destroy()
   })
   .then(product=>{
    res.redirect('/admin')
   }).catch(err => console.log(err))
}
