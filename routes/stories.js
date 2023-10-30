const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Madlib = require('../models/Madlib');
const fs = require('fs');
const { log } = require("console");

router.get("/", async (req, res) => {

  const data = fs.readFileSync('tempStoryStorage.txt', 'utf-8');
  
  res.render("show", {story: data});

});



module.exports = router;
