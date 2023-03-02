const express= require('express');
const path=require('path');
const sequelize= require('./database/connect');
const Product = require('./models/product');
const bodyPaser = require('body-parser');
const adminUserRoutes = require('./routes/admin/user')
const adminProductsRoutes = require('./routes/admin/products');
const User = require('./models/users');
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use((req, res, next)=>{
   User.findByPk(1).then(user=>{
   req.user=user
   next()
   })
  
})
app.use(adminUserRoutes);
app.use(adminProductsRoutes);
User.hasMany(Product)
sequelize.sync()
.then(user=>{
  app.listen(3001)
})
.catch(err=>{
    console.log(err)
})

