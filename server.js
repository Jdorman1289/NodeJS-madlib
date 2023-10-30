const express = require("express");
const storiesRouter = require("./routes/stories");
const Madlib = require("./models/Madlib");

const app = express();
app.set("view engine", "ejs");

// middleware for getting info from forms
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // res.render("index", {textData: "eventually from the database"});

  res.render("index");
});

app.post("/play", (req, res) => {
  let madlib = new Madlib();
  madlib.setAdj(req.body.adj);
  madlib.setAdv(req.body.adv);
  madlib.setVerb(req.body.verb);
  madlib.setNoun(req.body.noun);
  madlib.setStory();
  madlib.setSavedStories(madlib.getStory());
  console.log(madlib.getStory());
  res.redirect("/stories");
});

app.use("/stories", storiesRouter);

app.listen(3000);
