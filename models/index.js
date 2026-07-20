const Option = require('./option')
const Poll = require('./poll')
const Vote = require('./vote')
const db = require('../db')

Poll.hasMany(Option, {foreignkey: "pollId", as: "options", onDelete: 'CASCADE'})
Option.belongsTo(Poll, {foreignkey: "pollId", as: "poll"})

Option.hasMany(Vote, { foreignKey: 'optionId', as: 'votes', onDelete: 'CASCADE' })
Vote.belongsTo(Option, { foreignKey: 'optionId', as: 'option' })

module.exports = { db, Option, Poll, Vote}