const express = require("express");
const router = express.Router();
const redis = require("redis");
const dbClient = redis.createClient();

router.get("/", async (req, res) => {
  await dbClient.connect();
  const keys = await dbClient.KEYS("*");

  let stories = [];

  for (const key of keys) {
    const newStory = await dbClient.get(key);
    stories.push(newStory);
  }

  res.render("show", { stories: stories });
});

module.exports = router;
