const express = require("express");
const path = require("path");

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const users = [{
    userName: "Aditya Gupta",
    userEmail: "aditya@gmail.com",
    userAge: "22",
    userUniqueId: '1'
},
{
    userName: "Vanshita Jaiswal",
    userEmail: "vanshita@gmail.com",
    userAge: "21",
    userUniqueId: '2'
},
{
    userName: "Sachin Yadav",
    userEmail: "sachin@gmail.com",
    userAge: "22",
    userUniqueId: '3'
}
]

app.get("/", (req, res) => {
    res.render("./home.ejs",{data:users});
})

app.post("/" , (req,res) => {
    const data = req.body;
    data.userUniqueId = users.length+1;
    console.log(data);
    users.push(data);
    res.status(200).redirect("/");
});

app.post('/delete',(req,res) => {
    users.pop(req.body.userUniqueId-1);
    res.redirect("/");
})

app.post('/update',(req,res) => {
    const data = req.body;
    users[data.userUniqueId-1] = data;
    res.redirect("/");
})

app.listen(8080);