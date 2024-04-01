const CharacterHarryPotter = require('../../models/models.HarryPotter/characters.HarryPotter.model');

const getCharactersHarryPotter = async (req, res) => {
  try {
    const allCharactersHarryPotter = await CharacterHarryPotter.find();
    return res.status(200).json(allCharactersHarryPotter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterHarryPotter = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterHarryPotter = await CharacterHarryPotter.findById(id)
      .populate('planetHarryPotter')
      .populate('countryHarryPotter');
    return res.status(200).json(oneCharacterHarryPotter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterHarryPotter = async (req, res) => {
  try {
    const newCharacterHarryPotter = new CharacterHarryPotter(req.body);
    const createdCharacterHarryPotter = await newCharacterHarryPotter.save();
    return res.status(201).json(createdCharacterHarryPotter);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterHarryPotter = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersHarryPotter = new CountryHarryPotter(req.body);
    putCharactersHarryPotter._id = id;
    const updateCharactersHarryPotter = await CharacterHarryPotter.findByIdAndUpdate(
      id,
      putCharactersHarryPotter,
      { new: true }
    );
    if (!updateCharactersHarryPotter) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersHarryPotter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterHarryPotter = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterHarryPotter = await CharacterHarryPotter.findByIdAndDelete(id);
    if (!deleteCharacterHarryPotter) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterHarryPotter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersHarryPotter,
  getOneCharacterHarryPotter,
  postCharacterHarryPotter,
  putCharacterHarryPotter,
  deleteCharacterHarryPotter,
};
