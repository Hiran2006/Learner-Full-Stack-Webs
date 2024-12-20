const socket = io();
socket.emit('connection');
var logName="";

function onEnterName(){
    const log = document.querySelector(".id-page");
    logName = log.value;
    log.parentElement.removeChild(log);
    const blurEle = document.querySelector(".chat-box");
    blurEle.style.filter = "blur(0px)";
}

function sendChat(){
    const textChat = document.querySelector(".chat-sender input").value;
    console.log(textChat);
    socket.emit('send',textChat);
}
