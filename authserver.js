'use strict';

var express = require('express'),
    app = express(),
    port = process.env.PORT || 9109,
    bodyParser = require('body-parser'),
    jsonwebtoken = require("jsonwebtoken");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./routes/app_routes')
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

module.exports = app;