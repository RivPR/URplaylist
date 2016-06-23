var mongoose = require('mongoose');
var dbLocation = 'mongodb://localhost/urplaylistdb';

mongoose.connect(dbLocation);
mongoose.connection.on('disconnected', function(){
  console.log('Mongoose has disconnected from ' + dbLocation);
});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection has failed due to error: ' + err);
});
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to: ' + dbLocation);
});
// TERMINATION / EVENT LOGGING
// For application termination (ctrl + c)
process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected by Signal Interrupt')
    process.exit(0);
  });
});
// Nodemon restarts
process.once('SIGUSR2', function () {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected by nodemon restart');
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For Heroku app termination
process.on('SIGTERM', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected by heroku signal termination');
    process.exit(0);
  });
});

require('./artist');
require('./track');
require('./album');
