const express = require("express");
const multer = require("multer");
const fs = require('fs');
const app = express();

const date = new Date();

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/');
    },
    filename : (req,file,cb)=>{
        cb(null, file.originalname);
    }
});

const upload = multer({storage:storage});

app.use('/',express.static("public"));

app.post('/upload',upload.single("file"),(req, res)=>{
    console.log(req.file);
    res.redirect('/');
});
app.use('/localStorage',express.static('upload'));
app.get('/view',(req, res)=>{
    const path ='uploads/'
    fs.readdir(path,(err,file)=>{
        if(err)
            console.log(err);
        else{
            res.json({file});
        }
    })
})
app.listen(8080);
