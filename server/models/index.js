var db = require('../db');


module.exports = {
  messages: {
    get: function () {
      var getQuery = 'SELECT * from messages';
    }, // a function which produces all the messages
    post: function () {
      var postQuery = "INSERT INTO messages(?, ?) VALUE (?, ?)";

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      var getQuery = 'SELECT * from users';

    },
    post: function () {
      var postQuery = "INSERT INTO users(?, ?) VALUE (?, ?)";

    }
  }
};


