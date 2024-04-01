const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const charactersSchema = new Schema({
    name: { type: String, required: true },
    actor: { type: String, required: true },
    house: { type: String, required: false },
    type: { type: String, required: false },
    picture: { type: String },
    resume: { type: String, required: false },
}, {
    timestamps: true,
});

const CharactersHarryPotter = mongoose.model('characterHarryPotter', charactersSchema);

module.exports = CharactersHarryPotter;
