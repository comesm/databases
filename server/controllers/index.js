var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // console.log('our get request from controllers/index.js');
      // var b = {
      //   username: 'Cynthia B',
      //   text: 'hi its working',
      //   roomname:  'lobby'
      // };
      // var str = JSON.stringify(b);
      // res.status(200).send(str);
      // //console.log(req);
      //res.json(b);
      //res.send();
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

