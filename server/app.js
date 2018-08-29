"use strict"
//require
var express = require('express'),
bodyParser = require('body-parser'),
request = require('request'),
path = require('path');
//Populate process.env variable
require('dotenv').config();

var app = express();

//Middleware
app.use(express.static(path.join(__dirname, '/..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res){
    res.sendFile('../public/index.html', {root: __dirname});
});
app.post('/test', function(req, res){
    console.log('Response : ', req.body);
res.status(200).send('Bonjour').end()
});

app.listen(process.env.APP_PORT, function (){
    console.log('Server listening on  : '+process.env.APP_PORT);
});