const express = require("express");
const router = express.Router();
const Madlib = require("../models/Madlib");
const fs = require("fs");
const redis = require("redis");
const dbClient = redis.createClient();

router.get("/", (req, res) => {
  const data = dbClient.get("story1", (err, reply) => {
    if (err) {
      console.error(err);
    } else {
      console.log(reply);
    }
  });

  // const data = fs.readFileSync('tempStoryStorage.txt', 'utf-8');

  res.render("show", { story: data });
});

module.exports = router;
