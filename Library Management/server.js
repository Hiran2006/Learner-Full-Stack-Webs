const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Hello World');
});

app.listen(8080,(err)=>{
    if(err){
        console.log('Error in running the server');
        return;
    }
    console.log('Server is running on port 8080');
})