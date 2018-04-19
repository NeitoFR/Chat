"use strict"
//require
var express = require('express'),
bodyParser = require('body-parser'),
request = require('request'),
path = require('path');
//Populate process.env variable
require('dotenv').config();
global.allLedState = [false, false, false, false, false, false];

/*[
    {led1 : 1, state1: 0},
    {led1 : 2, state2: 0},
    {led1 : 3, state3: 0},
    {led1 : 4, state4: 0},
    {led1 : 5, state5: 0},
    {led1 : 6, state6: 0}

]*/

//Server
var app = express();

//Middleware
app.use(express.static(path.join(__dirname, '/..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Routing
app.get('/', function (req, res){
    res.sendFile('../public/index.html', {root: __dirname});

    //console.log(req.url);
});
app.post('/test', function(req, res){
    console.log('Response : ', req.body);
res.status(200).send('Bonjour').end()
});

//SQL API Routing
app.use(require('./sql_routes/sql-routes'));
app.use(require('./py_routes/py-routes'));

/*app.get('/allLedState', function(req, res){
    res.status(200).send(allLedState).end()
});*/

app.listen(process.env.APP_PORT, function (){
    console.log('Server listening on  : '+process.env.APP_PORT);
});