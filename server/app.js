"use strict"
//require
require('dotenv').config();

var path = require('path'),
    bodyParser = require('body-parser'),
    express = require('express'),
    http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

var users = [];


app.use(express.static(path.join(__dirname, '/..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile('../public/index.html', { root: __dirname });
});

io.sockets.on('connection', function (socket) {
    console.log('Un client est connecté !');
    socket.on('username', function (message) {
        console.log(message);
        socket.username = message.username;
        users.push(socket.username);
        socket.send('Your username is ' + socket.username);
    });
    socket.on('message', function(message) {    
        console.log(message);
        
    });
});


var interval = setInterval(function () {
    io.emit('userlist', users)
}, 3000)

server.listen(process.env.APP_PORT, function () {
    console.log('Server listening on port : ' + process.env.APP_PORT);
});