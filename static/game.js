var socket = io();
  document.getElementById('buttons').addEventListener('click',function(event){
  if(event.target.id == "Rock" || event.target.id == "Paper" || event.target.id == "Scissors" ){
    socket.emit('clicked',event.target.id)
  }
  });

socket.emit('new player');
setInterval(function() {
  socket.emit('movement', movement);
}, 1000 / 60);

var canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 600;
var context = canvas.getContext('2d');
socket.on('state', function(players) {
 // console.log(players);
  context.clearRect(0, 0, 800, 600);
});
