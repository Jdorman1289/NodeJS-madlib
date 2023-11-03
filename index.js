const express = require("express");
const storiesRouter = require("./routes/stories");
const Madlib = require("./models/Madlib");
const fs = require("fs");
const redis = require("redis");
let dbClient = redis.createClient();

const app = express();
app.set("view engine", "ejs");

// middleware for getting info from forms
app.use(express.urlencoded({ extended: true }));

let madlib = new Madlib();

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/play", async (req, res) => {
  madlib.setAdj = req.body.adj;
  madlib.setAdv = req.body.adv;
  madlib.setVerb = req.body.verb;
  madlib.setNoun = req.body.noun;
  madlib.setStory();
  madlib.setSavedStories = madlib.getStory;

  await dbClient.connect();
  await dbClient.set(`Story`, madlib.getStory);

  res.redirect("/stories");
});

app.listen(3000);

app.use("/stories", storiesRouter);
