var db = require('../db');

module.exports = {
    messages: {
        get: function() {}, // a function which produces all the messages
        post: function() {} // a function which can be used to insert a message into the database
    },

    users: {
        // Ditto as above.
        get: function() {},
        post: function() {}
    }
};


// var db = require('../db');

// module.exports = {

//   messages: {
//     get: function (callback) {
//       // fetch all messages
//       // text, username, roomname, id
//       var queryStr = 'select messages.id, messages.message, messages.roomname, users.username \
//                       from messages left outer join users on (messages.userid = users.id) \
//                       order by messages.id desc';
//       db.query(queryStr, function(err, results) {
//         callback(err, results);
//       });
//     },
//     post: function (params, callback) {
//       // create a message for a user id based on the given username
//       var queryStr = 'insert into messages(message, userid, roomname) \
//                       value (?, (select id from users where username = ? limit 1), ?)';
//       db.query(queryStr, params, function(err, results) {
//         callback(err, results);
//       });
//     }
//   },
//   users: {
//     get: function (callback) {
//       // fetch all users
//       var queryStr = 'select * from users';
//       db.query(queryStr, function(err, results) {
//         callback(err, results);
//       });
//     },
//     post: function (params, callback) {
//       // create a user
//       var queryStr = 'insert into users(username) values (?)';
//       db.query(queryStr, params, function(err, results) {
//         callback(err, results);
//       });
//     }
//   }
//   };
