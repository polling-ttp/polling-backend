const router = require("express").Router();
const pollRouter = require("./Polls");

router.use("/polls", pollRouter);

module.exports = router;
