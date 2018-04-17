"use strict"
//require
var express = require('express'),
bodyParser = require('body-parser'),
request = require('request'),
path = require('path');
//Populate process.env variable
const _port = 3000;
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

app.listen(_port, function (){
    console.log('Server listening on  : '+_port);
});