const CharacterStarWars = require('../../models/models.StarWars/characters.StarWars.model');

const getCharactersStarWars = async (req, res) => {
  try {
    const allCharactersStarWars = await CharacterStarWars.find();
    return res.status(200).json(allCharactersStarWars);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterStarWars = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterStarWars = await CharacterStarWars.findById(id)
      .populate('planetStarWars')
      .populate('countryStarWars');
    return res.status(200).json(oneCharacterStarWars);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterStarWars = async (req, res) => {
  try {
    const newCharacterStarWars = new CharacterStarWars(req.body);
    const createdCharacterStarWars = await newCharacterStarWars.save();
    return res.status(201).json(createdCharacterStarWars);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterStarWars = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersStarWars = new CountryStarWars(req.body);
    putCharactersStarWars._id = id;
    const updateCharactersStarWars = await CharacterStarWars.findByIdAndUpdate(
      id,
      putCharactersStarWars,
      { new: true }
    );
    if (!updateCharactersStarWars) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersStarWars);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterStarWars = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterStarWars = await CharacterStarWars.findByIdAndDelete(id);
    if (!deleteCharacterStarWars) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterStarWars);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersStarWars,
  getOneCharacterStarWars,
  postCharacterStarWars,
  putCharacterStarWars,
  deleteCharacterStarWars,
};
