
const socket = io();

socket.emit('connection');

function sendMessage(){
    const message = document.getElementById("message").value;
}
