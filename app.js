const express= require('express');
const path=require('path');
const bodyPaser = require('body-parser');
const adminUserRoutes = require('./routes/admin/user')
const app = express();
app.use(bodyPaser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(adminUserRoutes);
app.listen(3001)
