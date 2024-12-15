
function GetFiles(){
    fetch('/view').then((res)=>res.json()).then((data)=>{
        let fileDoc = document.getElementById('file-list');
        let deleteSelector = document.querySelector('#delete select');
        console.log(data)
        fileDoc.innerHTML="";
        data.file.forEach(file => {
            let container = document.createElement('li');
            let link = document.createElement('a');
            link.href=`/uploaded/${file}`;
            link.target='blank';
            let text = document.createTextNode(file);
            link.append(text);
            container.append(link);
            fileDoc.append(container);

            let selOption = document.createElement("option");
            selOption.value = file;
            selOption.innerHTML = file;
            deleteSelector.append(selOption);
        });
    });
}


GetFiles();

function deleteFile(){
    const delectForm = document.querySelector("#delete form");
    const formData = new FormData(delectForm);
    console.log(file.value);
    fetch(`/delete/${formData.get('file')}`,{method:"DELETE"}).then((res)=>res.text()).then((message)=>{
        alert(message);
        window.location.reload();
    });
}