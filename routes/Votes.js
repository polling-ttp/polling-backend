const voteRouter = require("express").Router();
const { Poll, Option, Vote } = require("../models");

voteRouter.post("/", async (req, res, next) => {
  try {
    const vote = Vote.create();
  } catch (err) {
    next(err);
  }
});

module.exports = voteRouter;
