const socket = io();
socket.emit('connection',"Hello");

function sendMessage(){
    const message = document.getElementById("message").value;
}
