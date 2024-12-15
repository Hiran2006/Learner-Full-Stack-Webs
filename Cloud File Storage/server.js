const express = require("express");
const multer = require("multer");
const fs = require('fs');
const app = express();

const date = new Date();

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'localstorage/');
    },
    filename : (req,file,cb)=>{
        cb(null, file.originalname);
    }
});

const upload = multer({storage:storage});

app.use('/',express.static("public"));

app.post('/upload',upload.single("file"),(req, res)=>{
    res.redirect('/');
});
app.use('/uploaded',express.static('localstorage'));
app.get('/view',(req, res)=>{
    const path ='localstorage/'
    fs.readdir(path,(err,file)=>{
        if(err)
            console.log(err);
        else{
            res.json({file});
        }
    })
})

app.delete('/delete/:filename', (req,res)=>{
    const filename = req.params.filename;
    const location = `localstorage/${filename}`;
    if(fs.existsSync(location)){
        fs.unlinkSync(location);
        res.send("Successfuly deleted");
    }
})
app.listen(8080);
