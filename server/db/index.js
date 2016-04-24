var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '');

var Usr = db.define('Usr', {
    username: Sequelize.STRING
});

var Msg = db.define('Msg', {
    text: Sequelize.STRING,
    rmn: Sequelize.STRING
});

Msg.belongsTo(Usr);
Usr.hasMany(Msg);


Usr.sync();
Msg.sync();
exports.Usr = Usr;
exports.Msg = Msg;


// var mysql = require('mysql');
// var controllers = require('../controllers');

// // Create a database connection and export it from this file.
// // You will need to connect with the user "root", no password,
// // and to the database "chat".

// var dbConnection = mysql.createConnection({
//   user: 'root',
//   password: '',
//   database: 'chat'
// });

// dbConnection.connect();
