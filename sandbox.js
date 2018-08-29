var http = require('http');
var fs = require('fs');
require('dotenv').config();
// Chargement du fichier index.html affiché au client
var server = http.createServer();

// Chargement de socket.io
var io = require('socket.io').listen(server);

// Quand un client se connecte, on le note dans la console
io.sockets.on('connection', function (socket) {
    console.log('Un client est connecté !');
    socket.send(socket);
    
});

server.listen(process.env.APP_PORT, function () {
    console.log('Listening on port', process.env.APP_PORT);
    
});