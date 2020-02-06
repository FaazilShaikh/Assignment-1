// Dependencies.
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketIO(server);
var calc = require('./calculateResults');

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
var selected;
var playercount =0;
io.on('connection', function(socket) {
  socket.on('new player', function() {
    playercount++;
    players[socket.id] = {
      selection: "",
      name: playercount
    };
  
});

  socket.on('clicked',function(clicked){
  console.log(clicked);
  if((clicked == "Rock" || clicked == "Paper"|| clicked == "Scissors") && players[socket.id]){ //verify in case a tampered event is fired, and check to see if the player exists
    players[socket.id].selection = clicked;
    io.sockets.to(socket.id).emit("match","You have selected" + players[socket.id].selection);
    if(selected == null){
      selected = socket.id;
    }
    else
    {
      calcResults(socket.id,selected,players);
      selected = null;
      
    }
  }

  console.log(players[socket.id]);
  
  });
  socket.on('disconnect', function(){
   delete players[socket.id];
    });
    
  


});
