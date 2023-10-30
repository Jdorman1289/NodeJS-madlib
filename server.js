const express = require("express");
const storiesRouter = require("./routes/stories");
const Madlib = require("./models/Madlib");
const databaseConnection = require("./config");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");

// middleware for getting info from forms
app.use(express.urlencoded({ extended: true }));

let madlib = new Madlib();

app.get("/", (req, res) => {
  // res.render("index", {textData: "eventually from the database"});
  res.render("index");
});

app.post("/play", async (req, res) => {
  madlib.setAdj(req.body.adj);
  madlib.setAdv(req.body.adv);
  madlib.setVerb(req.body.verb);
  madlib.setNoun(req.body.noun);
  madlib.setStory();
  madlib.setSavedStories(madlib.getStory());

  const libSchema = new mongoose.Schema({
    story: String,
  });

  const Lib = mongoose.model("lib", libSchema);

  const newLib = new Lib({ story: `${madlib.getStory}` });
  await newLib.save();

  res.redirect("/stories");
});

app.use("/stories", storiesRouter);

mongoose
  .connect(databaseConnection)
  .then(() => {
    console.log("App is connected to the database");
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error);
  });
