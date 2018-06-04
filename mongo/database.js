/*
*  database.js
*
*/
const colors = require('colors')
const mongoose = require('mongoose')

module.exports = {
  connect
}

const DB_NAME_STRING = 'mongodb://localhost/mydb'

// connect to Mongo
function connect () {
  mongoose.connect(DB_NAME_STRING).catch(() => {}) // здесь ловим ошибки если есть, чтобы не выводило мусора в консоль

  // getting connection
  let db = mongoose.connection

  // set listeners to events of DB
  db.on('error', errCatcher)
  db.on('connected', () => { console.log(colors.green.bold('CONNECTED: MongoDB')) })
}

// catch error fof making errors beatiful in console
function errCatcher (err) {
  let error = colors.red.bold('ERROR [' + err.name + '] - ')
  error += colors.yellow(err.message)
  console.log(error)
  // process.exit(1)
}
