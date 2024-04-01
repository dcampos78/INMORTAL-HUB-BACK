const CharacterHungerGames = require('../../models/models.HungerGames/characters.HungerGames.model');

const getCharactersHungerGames = async (req, res) => {
  try {
    const allCharactersHungerGames = await CharacterHungerGames.find();
    return res.status(200).json(allCharactersHungerGames);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterHungerGames = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterHungerGames = await CharacterHungerGames.findById(id)
      .populate('planetHungerGames')
      .populate('countryHungerGames');
    return res.status(200).json(oneCharacterHungerGames);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterHungerGames = async (req, res) => {
  try {
    const newCharacterHungerGames = new CharacterHungerGames(req.body);
    const createdCharacterHungerGames = await newCharacterHungerGames.save();
    return res.status(201).json(createdCharacterHungerGames);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterHungerGames = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersHungerGames = new CountryHungerGames(req.body);
    putCharactersHungerGames._id = id;
    const updateCharactersHungerGames = await CharacterHungerGames.findByIdAndUpdate(
      id,
      putCharactersHungerGames,
      { new: true }
    );
    if (!updateCharactersHungerGames) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersHungerGames);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterHungerGames = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterHungerGames = await CharacterHungerGames.findByIdAndDelete(id);
    if (!deleteCharacterHungerGames) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterHungerGames);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersHungerGames,
  getOneCharacterHungerGames,
  postCharacterHungerGames,
  putCharacterHungerGames,
  deleteCharacterHungerGames,
};
