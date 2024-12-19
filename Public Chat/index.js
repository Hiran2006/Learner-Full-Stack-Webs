const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new socketIo.Server(http,{serveClient:true});

app.use('/',express.static('public'));


io.on('connection',(socket)=>{
    console.log("Player Connected");
})

server.listen(8080);


