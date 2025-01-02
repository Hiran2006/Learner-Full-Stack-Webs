const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const books = [
  {
    bookName: "Rudest Book Ever",
    bookAuthor: "Shwetabh Gangwar",
    bookPages: 200,
    bookPrice: 240,
    bookState: "Available",
  },
  {
    bookName: "Do Epic Shit",
    bookAuthor: "Ankur Wariko",
    bookPages: 200,
    bookPrice: 240,
    bookState: "Available",
  },
];
app.get("/", (req, res) => {
  res.render("library", { books: books });
});
app.post("/", (req, res) => {
  const data = req.body;
  data.bookState = "Available";
  books.push(data);
  res.redirect("/");
});
app.get("/library/issue/:id", (req, res) => {
    books[req.params.id].bookState="Unavailable";
    res.redirect('/');
});
app.get("/library/return/:id", (req, res) => {
    books[req.params.id].bookState="Available";
    res.redirect('/');
});
app.get("/library/delete/:id", (req, res) => {
    books.pop(req.params.id);
    res.redirect('/');
});
app.listen(8080);
