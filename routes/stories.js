const express = require("express");
const router = express.Router();
const Madlib = require('../models/Madlib');

router.get("/", (req, res) => {
  res.render("show", );

});



module.exports = router;
