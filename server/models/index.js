var db = require('../db');


module.exports = {
  messages: {
    get: function (callback) {
      var queryStr = "select messages.id, messages.text, messages.roomname, users.username from messages \ 
                      left outer join users on (messages.userID = users.id) \
                      order by messsage.id desc";
      db.query(queryStr, function(err, results) {
        callback(results);
      });
    },

    post: function (param, callback) {
      var queryStr = "insert into messages(text, userid, roomname) \
                      values (?, (select id from users where username = ? limit 1, ?)";
      db.query(queryStr, function(err, results) {
        callback(results);
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryStr = "SELECT * from users";
      db.query(queryStr, function(err, results) {
        callback(results);
      });
    },

    post: function (param, callback) {
      var queryStr = "insert into users(username) values (?)";
      db.query(queryStr, function(err, results) {
        callback(results);
      });
    }
  },
   rooms: {
    // Ditto as above.
    get: function (callback) {
      var queryStr = "SELECT * from users";
      db.query(queryStr, function(err, results) {
        callback(results);
      });
    },

    post: function (param, callback) {
      var queryStr = "insert into users(username) values (?)";
      db.query(queryStr, function(err, results) {
        callback(results);
      });
    }
  }
};


