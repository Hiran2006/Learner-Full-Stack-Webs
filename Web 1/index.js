const textArea=document.getElementById("text-area");
const tagContainer=document.getElementById('tags');

textArea.focus();
textArea.addEventListener("keyup",(e)=>{
    updateTag(e.target.value);
});

function updateTag(input){
    const tags = input.split(',').filter(e=>e.trim()!="").map(tag=>tag.trim());
    tagContainer.innerHTML="";
    tags.forEach(el => {
        let tagEle=document.createElement('span');
        tagEle.innerText=el;
        tagEle.classList.add("tag");
        tagContainer.appendChild(tagEle);
        console.log("ok")
    });
}
