const QRcode = require('qrcode');
const express = require('express');
const app = express();
const port = 8080;
app.use('/', express.static("public"));
app.use('/views', express.static("Generate QR"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get('/generate-qr', (req, res) => {
    const time = new Date();
    console.log(req.query.qrvalue);
    QRcode.toFile(__dirname + "/Generated QR/" + time.getTime() + ".png", req.query.qrvalue).then(()=>{
        res.sendFile(__dirname+"/Generated QR/" + time.getTime() + ".png");
    });
});

app.listen(port);
