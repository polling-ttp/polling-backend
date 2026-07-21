const optionRouter = require("express").Router();
const { Poll, Option, Vote } = require("../models");

optionRouter.post("/", async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});

module.exports = optionRouter;
