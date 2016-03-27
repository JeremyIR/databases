var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      db.Msg.findAll({include: [db.Usr]})
        .then(function(messages) {
          res.json(messages);
        });
    },
    post: function (req, res) {
      db.Usr.findOrCreate({where: {username: req.body.username}})
        .spread(function(user, created) {
          db.Msg.create({
            userid: user.get('id'),
            text: req.body.message,
            roomname: req.body.rmn
          }).then(function(message) {
            res.sendStatus(201);
          });
        });
    }
  },

  users: {
    get: function (req, res) {
      db.Usr.findAll()
        .then(function(users) {
          res.json(users);
        });
    },
    post: function (req, res) {
      db.User.findOrCreate({where: {username: req.body.username}})
        // findOrCreate returns multiple resutls in an array
        // use spread to assign the array to function arguments
        .spread(function(user, created) {
          res.sendStatus(created ? 201 : 200);
        });
    }
  }
};

// var models = require('../models');
// var bluebird = require('bluebird');

// var userFields = ['username'];
// var messageFields = ['message', 'username', 'roomname'];
// module.exports = {
//   messages: {
//     get: function (req, res) {
//       modules.messages.get(function(err, results) {
//         res.json(results);
//       });
//     },
//       // var requestUrl = parser(req.url);
//       // console.log(requestUrl, '******************');
//       // if (requestUrl === '/classes/messages' && request.method === 'GET') {
//       //   var data = models.messages; // coming from model
//       //   res.send(data); // render page and send data with it
//      // a function which handles a get request for all messages
//     post: function (req, res) {
//       var params = [req.body[text], req.body[username], req.body[roomname] ];
//       modules.messages.post(params, function(err, results) {
//         res.json(results);
//       });
//     },
//       //console.log(req.body);// this will be the post data in JSON form
//      // a function which handles posting a message to the database
//   },

//   users: {
//     get: function (req, res) {
//       modules.users.get(function(err, results) {
//         res.json(results);
//       });
//     },
//     post: function (req, res) {
//       var params = [req.body[username] ];
//       modules.users.post(params, function(err, results) {
//         res.json(results);
//       });
//     }
//   },
// };

