const Option = require('./options')
const Poll = require('./poll')
const Vote = require('./votes')
const db = require('../db')

Poll.hasMany(Option, {foreignkey: "pollId", as: "options", onDelete: 'CASCADE'})
Option.belongsTo(Poll, {foreignkey: "pollId", as: "poll"})

Option.hasMany(Vote, { foreignKey: 'optionId', as: 'votes', onDelete: 'CASCADE' })
Vote.belongsTo(Option, { foreignKey: 'optionId', as: 'option' })

module.exports = { db, Option, Poll, Vote}