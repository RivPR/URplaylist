require('./app_server/models/db');
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'app_server', 'views'));

var handlebars = require('express-handlebars').create({defaultLayout:'../../app_server/views/layouts/main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// app.use('/', require('./app_server/routes/index'));

app.use(function(req, res){
    res.status(404);
    res.send('Error: 404');
 });
app.use(function(err, req, res, next){
  console.log(err.stack);
  res.status(500);
  res.send('Error: 500');
 });
app.listen(3000, function(){
  console.log('App started on http://localhost:' + 3000 + ' ; press ctrl-c to terminate.');
 });
