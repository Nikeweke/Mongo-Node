/*
*  app.js
*
*/
const colors = require('colors')
const mongoose = require('mongoose')
const {Schema} = mongoose

// connect string
const mongoDB = 'mongodb://localhost/db_test'

// catch error fof making errors beatiful in console      
let errCatcher = (err) => {
    let error = colors.red.bold('ERROR [' + err.name + '] - ')
    error += colors.yellow(err.message)
    console.log(error)
    // process.exit(1)
}


let MySchema = new Schema({
    // id: Schema.ObjectId,
    id: String,
    name: String,
    surname: String
});

// Compile model from schema
let MyModel = mongoose.model('employees', MySchema );


// make connection to mongo
mongoose.connect(mongoDB, (err) => {/* if (err) console.log() */ }).catch(errCatcher)

// getting connection
let db = mongoose.connection

//Bind connection to error event (to get notification of connection errors)
db.on('error', errCatcher)
// db.on('connected', () => {})

// console.log('Here = ', db.readyState)
// console.log(mongoose.connection.readyState);


MyModel.find({}, function (err, docs) {
 // docs.forEach
 console.log(docs)
});

