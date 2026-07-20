const { Sequelize } = require('sequelize')
const db = new Sequelize('postgres://postgress:root@localhost:5432/polls-apps')
module.exports = db