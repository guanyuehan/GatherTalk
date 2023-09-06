const express = require("express");
const mongoose = require("mongoose");
const Comment = require("./models/comment");

// create express app
const app = express();

//listen for requests
const PORT = process.env.PORT || 3000;

//connect to mongodb
const DBURI =
  "mongodb+srv://ExTier1:extiertricia@chatapp.o5tqawl.mongodb.net/ChatApp?retryWrites=true&w=majority";
mongoose
  .connect(DBURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to db");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//register view engine
app.set("view engine", "ejs");

//middleware & static files
app.use(express.static("public"));

//routes
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
