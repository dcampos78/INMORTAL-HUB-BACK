const CharacterXmen = require('../../models/models.Xmen/characters.Xmen.model');

const getCharactersXmen = async(req, res) => {
    try {
        const allCharactersXmen = await CharacterXmen.find();
        return res.status(200).json(allCharactersXmen);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getOneCharacterXmen = async(req, res) => {
    try {
        const { id } = req.params;
        const oneCharacterXmen = await CharacterXmen.findById(id)
            .populate('planetXmen')
            .populate('countryXmen');
        return res.status(200).json(oneCharacterXmen);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postCharacterXmen = async(req, res) => {
    try {
        const newCharacterXmen = new CharacterXmen(req.body);
        const createdCharacterXmen = await newCharacterXmen.save();
        return res.status(201).json(createdCharacterXmen);
    } catch (error) {
        return res.status(500).json(error);
    }
};
const putCharacterXmen = async(req, res) => {
    try {
        const { id } = req.params;
        const putCharactersXmen = new CountryXmen(req.body);
        putCharactersXmen._id = id;
        const updateCharactersXmen = await CharacterXmen.findByIdAndUpdate(
            id,
            putCharactersXmen, { new: true }
        );
        if (!updateCharactersXmen) {
            return res.status(404).json({ message: 'Character not found' });
        }
        return res.status(200).json(updateCharactersXmen);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteCharacterXmen = async(req, res) => {
    try {
        const { id } = req.params;
        const deleteCharacterXmen = await CharacterXmen.findByIdAndDelete(id);
        if (!deleteCharacterXmen) {
            return res.status(404).json({ message: 'character not found' });
        }
        return res.status(200).json(deleteCharacterXmen);
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {
    getCharactersXmen,
    getOneCharacterXmen,
    postCharacterXmen,
    putCharacterXmen,
    deleteCharacterXmen,
};