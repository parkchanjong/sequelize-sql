
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes')
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use('/', routes);


app.listen(8000, function () {
  console.log('aj app listening on port 8000!');
});