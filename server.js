var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/heroku_test');

var User = require('./models/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('node_modules'));
app.use(express.static('public'));


app.post("/addUser", function(req, res){
  var user = new User(req.body);
  user.save();
  res.json(user);
});










app.listen(8080);







