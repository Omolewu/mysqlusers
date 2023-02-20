
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