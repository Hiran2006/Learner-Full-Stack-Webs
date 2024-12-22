const socket = io();
var logName="";
const chatContainer= document.querySelector(".chat-container");
const chatFormate =` 
    <div class="address">
        <img src="./Image/unkown.png" alt="img">
        <h2>ID</h2>
    </div>
    <div class="message">

    </div>
`;
function onEnterName(){
    const log = document.querySelector(".id-page");
    logName = log.querySelector("input").value;
    log.parentElement.removeChild(log);
    const blurEle = document.querySelector(".chat-box");
    blurEle.style.filter = "blur(0px)";
}

function sendChat(){
    const textChat = document.querySelector(".chat-sender input");
    const data = {name:logName,content:textChat.value};
    textChat.value="";
    generateChat(data,"sended");
    socket.emit("send",data);
}

function generateChat(data, clName){
    const chatBox = document.createElement("div");
    chatBox.className = clName;
    chatBox.innerHTML=chatFormate;
    chatBox.querySelector(".message").innerHTML=data.content;
    chatBox.querySelector(".address h2").innerHTML=data.name;
    chatContainer.appendChild(chatBox);
}

socket.on("receive",(data)=>{
    generateChat(data, "received");
})