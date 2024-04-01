const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videoGamesSchema = new Schema(

  {
    title: { type: String, required: false },
    picture: { type: String, required: false },
    platform: { type: String, required: false },
    year: { type: Number, required: false },
    studio: { type: String, required: false },
    clasification: { type: String, required: false },
    resume: { type: String, required: false },
    trailer: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const VideoGamesBlade = mongoose.model('videoGamesBlade', videoGamesSchema);

module.exports = VideoGamesBlade;
