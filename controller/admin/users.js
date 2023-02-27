
const db = require('../../database/connect');
exports.addUser=(req, res)=>{
    res.render('admin/add-user')
}
exports.postUser=(req, res)=>{
    const {name, phone, image}=req.body;
    db.execute('INSERT INTO registration(name, phone, image) VALUES(?, ?, ?)', [name, phone, image]).then(result=>{
      res.redirect(302, '/admin');
    }).catch(err=>{
        console.log(err)
    })  
}

exports.adminHome =(req, res)=>{
    db.execute("SELECT * from registration")
    .then(result=>{ 
        res.render('admin/index', {users: result[0]});
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