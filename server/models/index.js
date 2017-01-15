
var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '');

var User = db.define('users', {
username: Sequelize.STRING
}, {timestamps:false});

var Message = db.define('messages', {
  user_id: Sequelize.INTEGER,
  message: Sequelize.STRING,
  roomname: Sequelize.STRING
}, {timestamps: false});

module.exports = {
  messages: {
    get: function (callback) {
      Message.sync()
        .then(function() {
          return Message.findAll();
        }).then(function(results) {
          callback(null, results);
        }).catch(function(err) {
          callback(err, null);
          db.close();
        });
    }, // a function which produces all the messages

    post: function (data, callback) {
      Message.sync()
        .then(function() {
          // Retrieve objects from the database:
          return User.findAll({where: {username: data.username}});//{ where: {username: 'Marius'} });
        })
        .then(function(user) {
          data['user_id'] = user[0].id;
          delete data.username;
          return Message.create(data);
        })
        .then(function(result) {
          callback(null, result);
        })
        .catch(function(err) {
          callback(err, null);
          db.close();
        });
    }
  }, 

  users: {
    // Ditto as above.
    get: function (callback) {
      User.sync()
        .then(function() {
          return User.findAll();
        }).then(function(results) {
          callback(null, results);
        }).catch(function(err) {
          callback(err, null);
          db.close();
        });
    },
    post: function (data, callback) {
      User.sync()
        .then(function() {
          return User.findAll({where: {username: data.username}});//{ where: {username: 'Marius'} });
        })
        .then(function(users) {
          if (users.length === 0) {
            return User.create({username: data.username});
          } else {
            return 'result yaaayyyayyyaysayayayaya';
          }
        }).then(function(result) {
          callback(null, result);
          /////db.close();
        })
        .catch(function(err) {
          callback(err, null);
          console.error(err);
          db.close();
        });
    }
  }
};

