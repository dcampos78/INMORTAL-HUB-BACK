const CharacterresidentEvil = require('../../models/models.residentEvil/characters.residentEvil.model');

const getCharactersresidentEvil = async(req, res) => {
    try {
        const allCharactersresidentEvil = await CharacterresidentEvil.find();
        return res.status(200).json(allCharactersresidentEvil);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getOneCharacterresidentEvil = async(req, res) => {
    try {
        const { id } = req.params;
        const oneCharacterresidentEvil = await CharacterresidentEvil.findById(id)
            .populate('planetresidentEvil')
            .populate('countryresidentEvil');
        return res.status(200).json(oneCharacterresidentEvil);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postCharacterresidentEvil = async(req, res) => {
    try {
        const newCharacterresidentEvil = new CharacterresidentEvil(req.body);
        const createdCharacterresidentEvil = await newCharacterresidentEvil.save();
        return res.status(201).json(createdCharacterresidentEvil);
    } catch (error) {
        return res.status(500).json(error);
    }
};
const putCharacterresidentEvil = async(req, res) => {
    try {
        const { id } = req.params;
        const putCharactersresidentEvil = new CountryresidentEvil(req.body);
        putCharactersresidentEvil._id = id;
        const updateCharactersresidentEvil = await CharacterresidentEvil.findByIdAndUpdate(
            id,
            putCharactersresidentEvil, { new: true }
        );
        if (!updateCharactersresidentEvil) {
            return res.status(404).json({ message: 'Character not found' });
        }
        return res.status(200).json(updateCharactersresidentEvil);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteCharacterresidentEvil = async(req, res) => {
    try {
        const { id } = req.params;
        const deleteCharacterresidentEvil = await CharacterresidentEvil.findByIdAndDelete(id);
        if (!deleteCharacterresidentEvil) {
            return res.status(404).json({ message: 'character not found' });
        }
        return res.status(200).json(deleteCharacterresidentEvil);
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {
    getCharactersresidentEvil,
    getOneCharacterresidentEvil,
    postCharacterresidentEvil,
    putCharacterresidentEvil,
    deleteCharacterresidentEvil,
};