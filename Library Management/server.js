const express = require("express");
const token = require("jsonwebtoken");
const mysql = require("mysql2");
const path = require("path");
const app = express();

app.use(express.static("public"));
app.set('view-engine','ejs');

app.get("/", (req, res) => {
  res.sendFile("public/index.html");
});

app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "Library",
});

app.get("/login", (req, res) => {
  const data = req.query;
  connection.query(
    "select * from user where user_id=? and pass=?",
    [data.id, data.pass],
    (err, rows, cols) => {
      if (err) {
        console.log(err);
        return;
      }
      if (rows[0].isAdmine) {
        const signed = token.sign({ id: data.id, pass: data.id }, '0')
        res.redirect("/admin/"+signed);
      } else {
        res.redirect('/user');
      }
    }
  );
});

function authenticate(req,res,next){
  const fen = token.verify(req.params.signedV,"0");
  connection.query("select * from user where user_id=? and pass",[fen.id,fen.pass],(err,row,col)=>{
    if(row == ""){
      res.end();
    }
    else{
      console.log("Verified");
      next();
    }
  })
}
app.get('/admin/:signedV',authenticate, (req, res) => {
  connection.query("select * from book", (err,row,col)=>{
    console.log(row);
    res.render(path.join(__dirname,'/ServerPages/admin_login.ejs'));
  })
})



app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/404.html"));
  res.status(404);
});

app.listen(8080, (err) => {
  if (err) {
    console.log("Error in running the server");
    return;
  }
  console.log("Server is running on port 8080");
});
