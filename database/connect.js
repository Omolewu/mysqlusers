const mysql2 = require('mysql2');

let connect = mysql2.createPool({
   host:"localhost",
   user: 'root',
   database: 'users_profile',
   password: 'Engineer1212@'

})
module.exports = connect.promise()
