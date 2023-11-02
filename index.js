const express = require("express");
const storiesRouter = require("./routes/stories");
const Madlib = require("./models/Madlib");
const fs = require("fs");
const redis = require("redis");
const dbClient = redis.createClient({
  socket_keepalive: true,
  socket_initialdelay: 10000, // 10 seconds
});

const app = express();
app.set("view engine", "ejs");

// middleware for getting info from forms
app.use(express.urlencoded({ extended: true }));

let madlib = new Madlib();

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/play", (req, res) => {
  madlib.setAdj = req.body.adj;
  madlib.setAdv = req.body.adv;
  madlib.setVerb = req.body.verb;
  madlib.setNoun = req.body.noun;
  madlib.setStory();
  madlib.setSavedStories = madlib.getStory;

  dbClient.on("error", (err) => {
    console.error(err);
  });

  dbClient.on("connect", () => {
    console.log("Connected to Redis");
  });

  dbClient.set(
    `Story${Object.keys(madlib.getSavedStories).length + 1}`,
    madlib.getStory,
    (err, reply) => {
      if (err) {
        console.error(err);
      } else {
        console.log(reply);
      }
    }
  );

  // fs.writeFileSync("tempStoryStorage.txt", madlib.getStory);

  res.redirect("/stories");
});

app.listen(3000);

app.use("/stories", storiesRouter);
