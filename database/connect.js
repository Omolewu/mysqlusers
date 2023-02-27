const Sequelize = require('sequelize');

const connect = new Sequelize('o_store', "root", '', {
   host: 'localhost',
   dialect: 'mysql'
})
module.exports=connect;