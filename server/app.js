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

app.use(express.static(path.join(__dirname, '/..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile('../public/index.html', { root: __dirname });
});

io.sockets.on('connection', function (socket) {
    console.log('Un client est connecté !', socket);
});

server.listen(process.env.APP_PORT, function () {
    console.log('Server listening on port : ' + process.env.APP_PORT);
});