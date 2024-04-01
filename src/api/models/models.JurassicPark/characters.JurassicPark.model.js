const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const charactersSchema = new Schema(
  {
    name: { type: String, required: true },
    actor: { type: String, required: true },
    profession: { type: String, required: false },
    film: { type: String, required: false },
    picture: { type: String },
    resume: {type:String, required:false},
    
  },
  {
    timestamps: true,
  }
);

const CharactersJurassicPark = mongoose.model('characterJurassicPark', charactersSchema);

module.exports = CharactersJurassicPark;
