const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const booksSchema = new Schema(
  {
    title:{type:String,required:true},
    publication_year: {type: Number},
    saga_index: {type:Number},
    author: {type:String, required:true},
    resume: {type:String, required:false},
    picture: {type: String}
}, {
    timestamps: true,
});

const BooksLordOfTheRings = mongoose.model('booksLordOfTheRings', booksSchema);

module.exports = BooksLordOfTheRings;