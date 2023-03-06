const express= require('express');
const path=require('path');
const sequelize= require('./database/connect');
const Product = require('./models/product');
const authRoutes = require('./routes/auth');
const pagesRoutes = require('./routes/pages');
const cookieParser= require('cookie-parser');
const expressSession= require('express-session');
const bodyPaser = require('body-parser');
const adminUserRoutes = require('./routes/admin/user')
const adminProductsRoutes = require('./routes/admin/products');
const User = require('./models/users');
const app = express();
app.use(cookieParser());
app.use(expressSession({
  secret: 'my o store',
  resave: false,
  saveUninitialized: false,
  cookie:{secure:false}
}))
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use((req, res, next)=>{
   User.findByPk(1).then(user=>{
   req.user=user
   next()
   })
  
})
app.use(pagesRoutes);
app.use(authRoutes);
app.use(adminUserRoutes);
app.use(adminProductsRoutes);
User.hasMany(Product)

// User.sync({alter: true})
sequelize.sync()
.then(user=>{
  app.listen(3000, ()=>{
    console.log('connected to port', 3000);
  })
})
.catch(err=>{
    console.log(err)
})

