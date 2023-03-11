var express = require('express');

var path = require('path');
var favicon = require('serve-favicon');

var routes = require('./routes/index');


var app = express();

app.use(express.static(__dirname + '/public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// set port
app.set('port', (process.env.PORT || 2023));

app.use(favicon(__dirname + '/public/favicon.ico'));

app.use('/', routes);


app.listen(app.get('port'), function() {
  console.log('App is running on port', app.get('port'));
});
