var db = require('../db');
db.connect();

module.exports = {
  messages: {
    get: function (callback) {
      db.query('select * from messages', function(err, result) {
        if (err) {
          console.log(err);
          callback(err, null);
        } else {
          callback(null, result);
        }

      });

      //callback(data)
    }, // a function which produces all the messages

    post: function (data, callback) {
      console.log('12', data);
      db.query('select id from users where username = ?', data.username, function(err, result){
//        console.log('RESULT AT LINE 13, USERNAME QUERY', result);
        if (err) {
          console.log('Error', err);
        } else {
          //convert username to a user_id
          data['user_id'] = result[0].id;
          delete data.username;
          db.query('insert into messages set ?', data, function(err, result) {
            if (err) {
              console.log('error occured', err);
            }
  //          console.log('RESULT AT LINE 17 IN MODELS', result);
            callback(err, result);
          });    
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('select * from users', function(err, result) {
        if (err) {
          console.log(err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    },
    post: function (data, callback) {
      db.query('select username from users where username = ?', data.username, function(err, result) {
        if (err) {
          console.log('error', err);
        } else {
          if (result.length === 0) {
            db.query('insert into users set ?', data, function(err, result) {
    //          console.log('RESULT AT LINE 35 IN MODELS', result);
              if (err) {
                console.log('error occured', err);
              }
      //        console.log('RESULT AT LINE 33 IN MODELS', result);
              callback(err, result);
            });
          } else {
        //    console.log('RESULT AT LINE 43 IN MODELS', result);
            callback(err, result);
          }
        }
      });
    }
  }
};

