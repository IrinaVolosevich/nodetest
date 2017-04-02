var path = require('path');
var qs = require('querystring');

var async = require('async');
var bodyParser = require('body-parser');
var colors = require('colors');
var cors = require('cors');
var express = require('express');
var logger = require('morgan');
var moment = require('moment');
var request = require('request');

var config = require('./config');
var data = require('./demodata');

var app = express();

app.set('port', process.env.NODE_PORT || 3001);
app.set('host', process.env.NODE_IP || 'localhost');
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
    Demo get all users
 */
app.get('/users', function(req, res) {
  res.send(data.users);
});

/*
    Demo post all users collection
 */
app.post('/users', function(req, res) {
  res.send(data.users);
});

/*
 Demo find users by email
 */
app.get('/user/email', function(req, res) {
  let {email} = req.query;
  if(email) {
    let user = data.users.filter(user => { return user.email === email });
    res.send(user);
  } else {
    res.send({error: 'Not correct require'});
  }
});

/*
 Demo find users by email
 */
app.post('/user/email', function(req, res) {
  let {email} = req.query;
  if(email) {
    let user = data.users.filter(user => { return user.email === email });
    res.send(user);
  } else {
    res.send({error: 'Not correct require'});
  }
});




/*
 |--------------------------------------------------------------------------
 | Start the Server
 |--------------------------------------------------------------------------
 */
app.listen(app.get('port'), app.get('host'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
