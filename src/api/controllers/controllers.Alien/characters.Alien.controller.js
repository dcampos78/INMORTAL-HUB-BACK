const CharacterAlien = require('../../models/models.Alien/characters.Alien.model');

const getCharactersAlien = async (req, res) => {
  try {
    const allCharactersAlien = await CharacterAlien.find();
    return res.status(200).json(allCharactersAlien);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterAlien = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterAlien = await CharacterAlien.findById(id)
      .populate('planetAlien')
      .populate('countryAlien');
    return res.status(200).json(oneCharacterAlien);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterAlien = async (req, res) => {
  try {
    const newCharacterAlien = new CharacterAlien(req.body);
    const createdCharacterAlien = await newCharacterAlien.save();
    return res.status(201).json(createdCharacterAlien);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterAlien = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersAlien = new CountryAlien(req.body);
    putCharactersAlien._id = id;
    const updateCharactersAlien = await CharacterAlien.findByIdAndUpdate(
      id,
      putCharactersAlien,
      { new: true }
    );
    if (!updateCharactersAlien) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersAlien);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterAlien = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterAlien = await CharacterAlien.findByIdAndDelete(id);
    if (!deleteCharacterAlien) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterAlien);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersAlien,
  getOneCharacterAlien,
  postCharacterAlien,
  putCharacterAlien,
  deleteCharacterAlien,
};
