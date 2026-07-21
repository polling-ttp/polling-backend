const router = require("express").Router();
const { Poll, Option, Vote } = require("../models");

router.post("/", async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});

module.exports = router;
