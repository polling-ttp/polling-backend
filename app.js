const express = require("express");
const cors = require("cors");
const app = express();
const { db } = require("./models");
const poll = require("./routes/Polls");
const options = require("./routes/options");

const pollrouter = require("./routes/Polls")

app.use(express.json());
app.use(cors());
const PORT = 8000;

async function logger(req, res, next) {
  await console.log("Checking request method", req.method, req.originalUrl);
  next();
}
app.use(logger)
app.use(["/polls", "/Polls"], pollrouter)
async function startApp() {
  await db.sync();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
startApp();
