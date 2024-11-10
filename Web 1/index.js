const textArea=document.getElementById("text-area");

textArea.focus();
textArea.addEventListener("keyup",(e)=>{
    updateTag(e.target.value);
});

function updateTag(input){
    const tags = input.split(',')
}
