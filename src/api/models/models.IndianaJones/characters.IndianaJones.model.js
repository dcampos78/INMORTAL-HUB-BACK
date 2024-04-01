const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const charactersSchema = new Schema({
    name: { type: String, required: true },
    actor: { type: String, required: true },
    country: { type: String, required: true },
    profession: { type: String, required: true },
    picture: { type: String },
    resume: { type: String, required: false },
}, {
    timestamps: true,
});

const CharactersIndianaJones = mongoose.model('characterIndianaJones', charactersSchema);

module.exports = CharactersIndianaJones;

