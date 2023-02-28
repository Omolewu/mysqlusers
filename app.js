const express= require('express');
const path=require('path');
const sequelize= require('./database/connect');
const products = require('./models/product');
const bodyPaser = require('body-parser');
const adminUserRoutes = require('./routes/admin/user')
const adminProductsRoutes = require('./routes/admin/products');
const app = express();
app.use(bodyPaser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(adminUserRoutes);
app.use(adminProductsRoutes);
sequelize.sync()
.then(results=>{
    app.listen(3001)
}).catch(err=>{
    console.log(err)
})

