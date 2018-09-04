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
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.get('/', function (req, res) {
    res.sendFile('../public/index.html', { root: __dirname });
});

io.sockets.on('connection', function (socket) {
    console.log('Un client est connecté !');
    socket.on('username', function (message) {
        socket.username = message.username;
        users.push({username: socket.username});
        _sendUserList(users);
    })
});

server.listen(process.env.APP_PORT, function () {
    console.log('Server listening on port : ' + process.env.APP_PORT);
});

function _sendUserList(array) {
    io.emit('userlist', array);
}