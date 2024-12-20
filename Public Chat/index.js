const express = require("express");
const {Server} = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

io.on('connection',(socket)=>{
    console.log(`ID ${socket.id} connected`);
});

io.on('send',(socket)=>{
    console.log("data received");
});

server.listen(8080);