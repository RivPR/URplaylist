var Mongo = require('mongodb').MongoClient;
var dbURL = 'mongodb://localhost:27017/urplaylistdb';

module.exports.index = function(req, res){

  res.render('index', {title: "It's UR playlist"});


}
