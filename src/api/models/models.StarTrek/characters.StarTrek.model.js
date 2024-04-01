const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const charactersSchema = new Schema({
    name: { type: String, required: true },
    actor: { type: String, required: true },
    rank: { type: String, required: true },
    type: { type: String, required: false },
    picture: { type: String },
    resume: { type: String, required: false },
}, {
    timestamps: true,
});

const CharactersStarTrek = mongoose.model('characterStarTrek', charactersSchema);

module.exports = CharactersStarTrek;