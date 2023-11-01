const express = require("express");
const router = express.Router();
const Madlib = require('../models/Madlib');
const fs = require('fs');

router.get("/", (req, res) => {

  const data = fs.readFileSync('tempStoryStorage.txt', 'utf-8');
  
  res.render("show", {story: data});

});



module.exports = router;
