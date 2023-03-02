const sequelize = require('../database/connect');
const Sequelize = require('sequelize');

const user = sequelize.define('users', {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey:true
    },
    name:Sequelize.STRING,
    phone:{
        type:Sequelize.STRING,
        unique:true
    },
    image:{
       type:Sequelize.STRING,
       allowNull: false
    }
})
module.exports=user