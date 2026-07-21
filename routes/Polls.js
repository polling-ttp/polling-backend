const pollRouter = require("express").Router();
const { Poll, Option, Vote } = require("../models");

pollRouter.get("/", async (req, res, next) => {
  try {
    const polls = await Polls.findAll();
  } catch (err) {
    next(err);
  }
});

pollRouter.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const poll = await poll.findByPk(id, { include: option });
  } catch (err) {
    next(err);
  }
});

pollRouter.post("/", async (req, res, next) => {
  try {
    const post = await post.create(req.body);
  } catch (err) {
    next(err);
  }
});
pollRouter.post("/:id/option", async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});

module.exports = pollRouter;
