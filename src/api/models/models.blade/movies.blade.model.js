const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const moviesSchema = new Schema(
  {
    title: { type: String, required: true },
    picture: { type: String, required: true },
    director: { type: String, required: false },
    year: { type: Number, required: false },
    duration: { type: String, required: false },
    country: { type: String, required: false },
    genre: { type: String, required: false },
    clasification: { type: String, required: false },
    resume: {type:String, required:false},
    trailer: {type:String, required:false},
  },
  {
    timestamps: true,
  }
);

const MoviesBlade = mongoose.model('movieBlade', moviesSchema);

module.exports = MoviesBlade;
