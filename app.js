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


let employerSchema = new Schema({
    // id: Schema.ObjectId,
    id: String,
    name: String,
    surname: String,
});

// Compile model from schema
let employerModel = mongoose.model('employees', employerSchema );

// make connection to mongo
mongoose.connect(mongoDB, (err) => {/* if (err) console.log() */ }).catch(errCatcher)

// getting connection
let db = mongoose.connection

//Bind connection to error event (to get notification of connection errors)
db.on('error', errCatcher)
// db.on('connected', () => {})

// console.log('Here = ', db.readyState)
// console.log(mongoose.connection.readyState);
let data = {name: 'Nako', surname: 'Blondie'}


function get (model) {
   model.find({}, (err, docs) => {
       // docs.forEach
       console.log(docs)
   });  
}

function insert (data) {
    let employer = new employerModel(data);
    employer.save((err) => {
        if (err) console.log(err)
        // saved!
    })
}

function insert2 (data) {
    employerModel.create(data, function (err, small) {
      if (err) return handleError(err);
      // saved!
   })
}

function update () {
}

function deleteRecord () {
    console.log('sss')
}


// get(employerModel)
// insert()
// get(employerModel)
deleteRecord()
