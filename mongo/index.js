const mongoose = require('mongoose')
const { Schema } = mongoose
const db = mongoose.createConnection('mongodb://localhost/db_test')

console.log(mongoose.connection.readyState);

// schemas
const employeesSchema = new Schema ({
    id: Schema.ObjectId,
    name: String,
    surname: String
})
const MyModel = mongoose.model('Employees', employeesSchema);


module.exports = {

    start () { 
       
    //   let table = 'employees'  
    //   let empls = db.getCollections(table).find({})  
                  
      console.log('asdas')
         
//       const instance = new MyModel();
// instance.my.key = 'hello';
// instance.save(function (err) {
//   //
// });


      MyModel.find({}, function (err, docs) {
        // docs.forEach
        console.log(docs)
      });

    }

}
