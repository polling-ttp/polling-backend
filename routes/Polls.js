const pollRouter = require("express").Router();
const { Poll, Option, Vote } = require("../models");

// get all posts
pollRouter.get("/", async (req, res, next) => {
  try {
    const polls = await Poll.findAll();
    res.status(200).json(polls);
  } catch (err) {
    next(err);
  }
});

// // get a single post
pollRouter.get("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const poll = await Poll.findByPk(id, { include: Option });
    if (!poll) return res.status(404).json({ message: `Poll Not Found.` });
    res.status(200).json(poll);
  } catch (err) {
    next(err);
  }
});

// create a poll
pollRouter.post("/", async (req, res, next) => {
  const { poll, options } = req.body;

  try {
    const post = await Poll.create(poll);

    const listOpt = options.map(async (option) => (
      await Option.create({text: option, PollId: post.id})
    ));
    res.status(201).json({...post.toJSON()})  
  } catch (err) {
    next(err);
  }
});



pollRouter.post("/:id/vote", async (req, res, next) => {
  const vote = Number(req.params.id);
  try {
    const castVote = await Vote.create({ vote });
    if (!option) return res.status(404).json({ message: "Option not found." });
    res.status(201).json(castVote);
  } catch (err) {
    next(err);
  }
});

// update a poll

// delete a poll
pollRouter.delete("/:id", async (req, res, next) => {
  console.log("======>>cat food")
  try {
    await Poll.destroy( {where: {id: req.params.id}});
    return res.status(204).send("delete worked");
  } catch (error) {
    // console.log(error.message) .
    next(error);
  }
});

module.exports = pollRouter;