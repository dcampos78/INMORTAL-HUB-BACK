const CharacterLordOfTheRings = require('../../models/models.LordOfTheRings/characters.LordOfTheRings.model');

const getCharactersLordOfTheRings = async (req, res) => {
  try {
    const allCharactersLordOfTheRings = await CharacterLordOfTheRings.find();
    return res.status(200).json(allCharactersLordOfTheRings);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterLordOfTheRings = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterLordOfTheRings = await CharacterLordOfTheRings.findById(id)
      .populate('planetLordOfTheRings')
      .populate('countryLordOfTheRings');
    return res.status(200).json(oneCharacterLordOfTheRings);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterLordOfTheRings = async (req, res) => {
  try {
    const newCharacterLordOfTheRings = new CharacterLordOfTheRings(req.body);
    const createdCharacterLordOfTheRings = await newCharacterLordOfTheRings.save();
    return res.status(201).json(createdCharacterLordOfTheRings);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterLordOfTheRings = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersLordOfTheRings = new CountryLordOfTheRings(req.body);
    putCharactersLordOfTheRings._id = id;
    const updateCharactersLordOfTheRings = await CharacterLordOfTheRings.findByIdAndUpdate(
      id,
      putCharactersLordOfTheRings,
      { new: true }
    );
    if (!updateCharactersLordOfTheRings) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersLordOfTheRings);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterLordOfTheRings = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterLordOfTheRings = await CharacterLordOfTheRings.findByIdAndDelete(id);
    if (!deleteCharacterLordOfTheRings) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterLordOfTheRings);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersLordOfTheRings,
  getOneCharacterLordOfTheRings,
  postCharacterLordOfTheRings,
  putCharacterLordOfTheRings,
  deleteCharacterLordOfTheRings,
};
