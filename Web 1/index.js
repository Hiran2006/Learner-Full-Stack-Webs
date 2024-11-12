const textArea=document.getElementById("text-area");
const tagContainer=document.getElementById('tags');

textArea.focus();
textArea.addEventListener("keyup",(e)=>{
  if(e.key==="Enter"){
    let timeOut=setInterval(()=>{
      let pic = randomPick();
      pic.classList.add("selectTag");
      setTimeout(()=>{
        pic.classList.remove("selectTag");
      },100);
    },100);
    setTimeout(()=>{
        clearInterval(timeOut);
        let pic = randomPick();
        pic.style.backgroundColor="green";
    },10000) 
  }
  else
    updateTag(e.target.value);
});

function updateTag(input){
  const tags = input.split(',').filter(e => e.trim() != "").map(tag => tag.trim());
  tagContainer.innerHTML = "";
  tags.forEach(el => {
    let tagEle = document.createElement('span');
    tagEle.innerText = el;
    tagEle.classList.add("tag");
    tagContainer.appendChild(tagEle);
  });
}
function randomPick(){
  let tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}