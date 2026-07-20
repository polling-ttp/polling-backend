const router = require("express").Router();
const { poll, option, vote } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const polls = await Polls.findAll();
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const poll = await poll.findByPk(id, {include: option});
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const post = await post.create(req.body)
  } catch (err) {
    next(err);
  }
});
router.post("/:id/option", async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});


module.exports = polls;
