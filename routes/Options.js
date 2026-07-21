const optionRouter = require("express").Router();
const { Poll, Option, Vote } = require("../models");

// get all options
optionRouter.get("/", async (req, res, next) => {
  try {
    const allOptions = await Option.findAll();
    res.status(200).json(allOptions);
  } catch (err) {
    next(err);
  }
});

module.exports = optionRouter;
