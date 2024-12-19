const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new socketIo.Server(http);

app.use('/',express.static('public'));

app.get('/',(req, res)=>{
    res.sendFile('/index.html');
});

io.on('connection',()=>{
    console.log("Player Connected");
})

server.listen(8080);


