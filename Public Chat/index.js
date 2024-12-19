const express = require("express");
const io = require("socket.io")();
const app = express();
const port = 8080;

app.use('/',express.static('public'));
const midPort = app.listen(port,()=>{
    console.log("listen to port "+port);
})

io.on('connection',client=>{
    client.emit
})
io.listen(midPort);

