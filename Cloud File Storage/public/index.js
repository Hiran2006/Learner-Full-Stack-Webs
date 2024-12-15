
async function GetFiles(){
    fetch('/localStorage').then((res)=>res.json()).then((data)=>{
        let fileDoc = document.getElementById('file-list');
        console.log(data)
        fileDoc.innerHTML="";
        data.file.forEach(file => {
            let container = document.createElement('li');
            let link = document.createElement('a');
            link.href=`/view/${file}`;
            let text = document.createTextNode(file);
            link.append(text);
            container.append(link);
            fileDoc.append(container);
        });
    });
}


GetFiles();