/*
*  crud.js
*
*  Crud functions for testing mongoDB with mongoose
*/

module.exports = {
  get,
  insert,
  create,
  update,
  deleteRecord
}

function get (Model) {
  Model.find({}, (err, docs) => {
    if (err) console.log(err)
    // docs.forEach
    console.log(docs)
  })
}

// Making new instance and saving it
function insert (Model, data) {
  let employer = new Model(data)
  employer.save((err) => {
    if (err) console.log(err)
    // saved!
  })
}

// Just creating record without instance
function create (Model, data) {
  Model.create(data, function (err, small) {
    if (err) console.log(err)
    // saved!
  })
}

// Updating
function update (id, Model, updDate) {
  Model.update({_id: id}, updDate, {upsert: true}, (err) => console.log(err))
}

// Deleting
function deleteRecord (id, Model) {
  Model.find({ _id: id }).remove((err) => console.log(err))
}
