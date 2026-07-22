const Option = require("./option");
const Poll = require("./poll");
const Vote = require("./vote");
const db = require("../db");

Poll.hasMany(Option, {  
  onDelete: "CASCADE",
});
Option.belongsTo(Poll);

Option.hasMany(Vote, {
  onDelete: "CASCADE",
});
Vote.belongsTo(Option);

module.exports = { db, Option, Poll, Vote };
