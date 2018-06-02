const { Schema } = require('mongoose')

// const Schema = mongoose.Schema,
//     ObjectId = Schema.ObjectId;
 
// const BlogPost = new Schema({
//  author: ObjectId,
//  title: String,
//  body: String,
//  date: Date
// });


module.exports = new Schema ({
    id: Schema.ObjectId,
    name: String,
    surname: String
})