const Sequelize = require('sequelize');

const connect = new Sequelize('o_store', "root", 'Engineer1212@', {
   host: 'localhost',
   dialect: 'mysql'
})
module.exports=connect;