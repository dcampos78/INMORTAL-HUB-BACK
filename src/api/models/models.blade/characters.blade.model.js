const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const charactersSchema = new Schema(
  {
    name: { type: String, required: true },
    acthor: { type: String, required: true },
    race: { type: String, required: false },
    movie: { type: String, required: false },
    resume: {type:String, required:false},
    picture: { type: String },
  },
  {
    timestamps: true,
  }
);

const CharactersBlade = mongoose.model('characterBlade', charactersSchema);

module.exports = CharactersBlade;
