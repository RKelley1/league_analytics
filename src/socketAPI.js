var socket_io = require('socket.io');
var io = socket_io();
var socketAPI = {};

socketAPI.io = io;

io.on('connection', (socket) => {
  console.log("A user connected");
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

socketAPI.sendNotification = function() {
  io.socket.emit('hello', {msg: 'Hello World'});
}

module.exports = socketAPI;
