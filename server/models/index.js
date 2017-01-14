var db = require('../db');


db.connect();

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {
      console.log('post 8');
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

