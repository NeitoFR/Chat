"use strict"
//require
var express = require('express'),
bodyParser = require('body-parser'),
request = require('request'),
path = require('path');
//Populate process.env variable
require('dotenv').config();
//Server
var app = express();

//Middleware
app.use(express.static(path.join(__dirname, '/..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Routingé
app.get('/', function (req, res){
    res.sendFile('../public/index.html', {root: __dirname});

    //console.log(req.url);
});

//SQL API Routing
app.use(require('./sql_routes/sql-routes'));

app.listen(process.env.APP_PORT, function (){
    console.log('Server listening on  : '+process.env.APP_PORT);
});