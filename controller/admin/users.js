
const db = require('../../database/connect');
const Product = require('../../models/product');
const user = require('../../models/users');
exports.addUser=(req, res)=>{
    res.render('admin/add-user')
}
exports.postUser=(req, res)=>{
    const {name, phone, image}=req.body;
    user.create({
        name:name,
        phone:phone,
        image:image
    })
   .then(result=>{
      res.redirect(302, '/admin');
    }).catch(err=>{
        console.log(err)
    })  
}

exports.adminHome =(req, res)=>{
    Product.findAll()
    .then(result=>{ 
       res.render('admin/index', {products: result});
    }).catch(err=>{
        console.log(err)
    })
 
}
exports.updateuser=(req, res)=>{
    let id = req.params.id
    db.execute("selecT * FROm registration WHERE id=?",[id])
    .then(data =>{
      
      res.render('admin/update-user', {user:data[0]} )
    })
    .catch(err=>{
        console.log(err)
    })
   
}

exports.adminUpdate = (req, res)=>{
const {id , name, phone, image} =  req.body
db.execute("UPDATE registration SET name=?, phone=?, image=? WHERE id=?", [name, phone, image, id])
.then(result =>{
    res.redirect(302, '/admin');
})
}
exports.deleteUser =(req, res)=>{
    let {id}= req.body; 
    db.execute("Delete  FROM registration WHERE id=?", [id])
    .then(result =>{
        res.redirect(302, '/admin');
    }).catch(err =>{
        console.log(err);
    }) 
}