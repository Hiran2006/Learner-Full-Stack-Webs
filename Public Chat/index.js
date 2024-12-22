const express = require("express");
const {Server} = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

io.on('connection',(socket)=>{
    console.log(`ID ${socket.id} connected`);
    socket.on("send",(data)=>{
        console.log(data);
        socket.broadcast.emit("receive",data);
    });
    socket.on('disconnect',(data)=>{
        console.log(`Id ${socket.id} disconnected`);
    })
});

server.listen(8080);