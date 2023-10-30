const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Madlib = require('../models/Madlib');


router.get("/", async (req, res) => {
  // const stories = await Lib.find();
  res.render("show");

});



module.exports = router;
