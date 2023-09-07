const express = require("express");
const mongoose = require("mongoose");
const Comment = require("./models/comment");

//helper functions
const helper = require("./helperFuncs");

// create express app
const app = express();

//listen for requests
const PORT = process.env.PORT || 3000;

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
app.use(express.urlencoded({ extended: true }));

app.get("/comments", (req, res) => {
  Comment.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

app.get("/add-comment", (req, res) => {
  const comment = new Comment({
    content: "This is a test comment",
    datePosted: new Date(),
    author: "Tricia",
  });
  comment
    .save()
    .then((result) => {
      res.redirect("/chat");
    })
    .catch((err) => console.log(err));
});

app.post("/add-comment", (req, res) => {
  const comment = new Comment({
    content: req.body.content,
    datePosted: new Date(),
    author: req.body.author,
  });

  comment
    .save()
    .then((result) => {
      res.redirect("/chat");
    })
    .catch((err) => console.log(err));
});

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

app.get("/chat", async (req, res) => {
  let comments;
  try {
    comments = await Comment.find().sort({ createdAt: -1 });
  } catch (err) {
    console.log(err);
  }
  res.render("chat", { comments, helper });

});

app.use((req, res) => {
  res.render("404");
});

// remember to remove the .html on the web url if its there 
// access using http://localhost:3000/home
