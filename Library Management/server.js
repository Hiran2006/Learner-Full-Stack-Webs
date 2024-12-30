const express = require('express');
const app = express();


app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile('public/index.html');
});

app.get('/login', (req, res) => {
    const data = req.query;
    console.log(data);
});

app.listen(8080, (err) => {
    if (err) {
        console.log('Error in running the server');
        return;
    }
    console.log('Server is running on port 8080');
})