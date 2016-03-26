var path = require('path');
var url = require('url');
var parser = require('body-parser');
var models = require('../models');
var util = require('../util.js');
// var jsonParser = parser.json();


module.exports = {
  messages: {
    get: function (req, res) {
      var requestUrl = parser(req.url);
      console.log(requestUrl, '******************');
      if (requestUrl === '/classes/messages' && request.method === 'GET') {
        var data = models.messages; // coming from model
        res.send(data); // render page and send data with it
      }
    }, // a function which handles a get request for all messages
    post: function (req, res) {

      console.log(req.body);// this will be the post data in JSON form

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {

    }
  }
};


