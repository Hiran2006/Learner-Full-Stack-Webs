const button=document.getElementById("addBtn");
const main=document.querySelector(".main");
button.addEventListener("click",()=>{addNote()});
LoadPage();
function LoadPage(){
    const data = JSON.parse(localStorage.getItem("note"));
    data.forEach((d)=>addNote(d));
}

function addNote(text=""){
    const node = document.createElement("div");
    node.classList.add("note");
    console.log(text);
    node.innerHTML=`
            <div class="tool">
                <img src="Save_icon.png" alt="" class="save">
                <img src="trash-bin.png" alt="" class="trash">
            </div>
            <textarea>${text}</textarea>
    `;
    node.querySelector(".trash").addEventListener("click",()=>{
        node.remove();
    });
    node.querySelector(".save").addEventListener("click",save)
    main.appendChild(node);
}

function save(){
    const note = main.querySelectorAll(".note textarea");
    let data=[]
    note.forEach(note => {
        data.push(note.value);
    });
    localStorage.setItem("note",JSON.stringify(data));
    console.log("confer");
}