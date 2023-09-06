const fs = require("fs");
const express = require("express");

const app = express();
app.use(express.static("public"));

app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.redirect("home");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/chat", (req, res) => {
  res.render("chat");
});

app.use((req, res) => {
  res.render("404");
});
