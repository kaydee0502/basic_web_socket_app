const http = require('http').createServer();
const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {

    console.log("user connected");
    socket.on("message", (message)=> {
        console.log(message);
        io.emit('message', `${socket.id.substr(0,2)} said ${message}`);
    });
})


// http listen on port 8080
http.listen(8080, () => {
    console.log("server started on 8080");
});
