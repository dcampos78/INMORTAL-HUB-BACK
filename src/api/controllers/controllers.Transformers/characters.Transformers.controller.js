const CharacterTransformers = require('../../models/models.Transformers/characters.Transformers.model');

const getCharactersTransformers = async(req, res) => {
    try {
        const allCharactersTransformers = await CharacterTransformers.find();
        return res.status(200).json(allCharactersTransformers);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getOneCharacterTransformers = async(req, res) => {
    try {
        const { id } = req.params;
        const oneCharacterTransformers = await CharacterTransformers.findById(id)
            .populate('planetTransformers')
            .populate('countryTransformers');
        return res.status(200).json(oneCharacterTransformers);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postCharacterTransformers = async(req, res) => {
    try {
        const newCharacterTransformers = new CharacterTransformers(req.body);
        const createdCharacterTransformers = await newCharacterTransformers.save();
        return res.status(201).json(createdCharacterTransformers);
    } catch (error) {
        return res.status(500).json(error);
    }
};
const putCharacterTransformers = async(req, res) => {
    try {
        const { id } = req.params;
        const putCharactersTransformers = new CountryTransformers(req.body);
        putCharactersTransformers._id = id;
        const updateCharactersTransformers = await CharacterTransformers.findByIdAndUpdate(
            id,
            putCharactersTransformers, { new: true }
        );
        if (!updateCharactersTransformers) {
            return res.status(404).json({ message: 'Character not found' });
        }
        return res.status(200).json(updateCharactersTransformers);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteCharacterTransformers = async(req, res) => {
    try {
        const { id } = req.params;
        const deleteCharacterTransformers = await CharacterTransformers.findByIdAndDelete(id);
        if (!deleteCharacterTransformers) {
            return res.status(404).json({ message: 'character not found' });
        }
        return res.status(200).json(deleteCharacterTransformers);
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {
    getCharactersTransformers,
    getOneCharacterTransformers,
    postCharacterTransformers,
    putCharacterTransformers,
    deleteCharacterTransformers,
};