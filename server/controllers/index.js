var models = require('../models/index');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(error, data) {
        if (error) {
          res.status(404).send(error);
        } else {
          res.status(200).send(data);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('LINE 23 CONTROLLERS POST', req.body);
      models.messages.post(req.body, function(error, response) {
        if (error) {
          console.log('Did not post', error);
          res.status(500).send(error);
        }
        //console.log('LINE 29 RESULT IN CONTROLLER', response);
        res.status(200).send(response);
      });    
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(error, data) {
        if (error) {
          res.status(404).send(error);
        } else {
          res.status(200).send(data);
        }
      });
    },
    post: function (req, res) {
      console.log('LINE 41 CONTROLLERS POST', req.body);
      models.users.post(req.body, function(error, response) {
        if (error) {
          console.log('Did not post', error);
          res.status(500).send(error);
        }
        console.log('LINE 47 RESULT IN CONTROLLER', response);
        res.status(200).send(response);
      });
    }
  }
};

