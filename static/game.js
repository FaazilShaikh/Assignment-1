var socket = io();
  document.getElementById('buttons').addEventListener('click',function(event){
  if(event.target.id == "Rock" || event.target.id == "Paper" || event.target.id == "Scissors" ){
    socket.emit('clicked',event.target.id)
  }
  });

socket.emit('new player');

socket.on('match', function(msg) {
  document.getElementById("match").innerHTML = msg;
  });
  

socket.on('res', function(msg) {
document.getElementById("result").innerHTML = msg;
});
