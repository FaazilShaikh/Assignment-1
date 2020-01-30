// Dependencies.
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set('port', 5000);
app.use('/static', express.static(__dirname + '/static'));

// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(5000, function() {
  console.log('Starting server on port 5000');
});

var players = {};
io.on('connection', function(socket) {
  socket.on('new player', function() {
  
   //console.log(socket)
    players[socket.id] = {
      x: 300,
      y: 300
    };
 
  });
  socket.on('movement', function(data) {
    var player = players[socket.id] || {};
    if (data.left) {
      player.x -= 15;
    }
    if (data.up) {
      player.y -= 15;
    }
    if (data.right) {
      player.x += 15;
    }
    if (data.down) {
      player.y += 15;
    }
  });

  socket.on('disconnect', function(){
    console.log(socket.id);
   delete players[socket.id];
   // players[socket.id] = {
     // x: 30000,
      //y: 30000
    //};

    });
    

});


setInterval(function() {
  io.sockets.emit('state', players);
}, 1000 / 60);
