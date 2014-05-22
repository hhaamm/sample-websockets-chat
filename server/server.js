var app = require('http').createServer(handler)
, io = require('socket.io').listen(app)
, fs = require('fs');

app.listen(8000);

function handler() {}

io.sockets.on('connection', function (socket) {
    socket.on("message", function(data) {
        console.log("New message: "+data.message);
        socket.emit("receive-message", data);
    });
});
