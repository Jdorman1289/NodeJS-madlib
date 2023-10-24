const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.send("User New Form");
});

router.post("/", (req, res) => {
  res.send("Create User");
});

// Put dynamic paths last in express
router
  .route("/:id")
  .get((req, res) => {
    res.send(`Getting user with ID of ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Updating user with ID of ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Deleting user with ID of ${req.params.id}`);
  });

module.exports = router;
