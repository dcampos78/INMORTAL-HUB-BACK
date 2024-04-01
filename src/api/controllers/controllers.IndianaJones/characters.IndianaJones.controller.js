const CharacterIndianaJones = require('../../models/models.IndianaJones/characters.IndianaJones.model');

const getCharactersIndianaJones = async (req, res) => {
  try {
    const allCharactersIndianaJones = await CharacterIndianaJones.find();
    return res.status(200).json(allCharactersIndianaJones);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterIndianaJones = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterIndianaJones = await CharacterIndianaJones.findById(id)
      .populate('planetIndianaJones')
      .populate('countryIndianaJones');
    return res.status(200).json(oneCharacterIndianaJones);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterIndianaJones = async (req, res) => {
  try {
    const newCharacterIndianaJones = new CharacterIndianaJones(req.body);
    const createdCharacterIndianaJones = await newCharacterIndianaJones.save();
    return res.status(201).json(createdCharacterIndianaJones);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterIndianaJones = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersIndianaJones = new CountryIndianaJones(req.body);
    putCharactersIndianaJones._id = id;
    const updateCharactersIndianaJones = await CharacterIndianaJones.findByIdAndUpdate(
      id,
      putCharactersIndianaJones,
      { new: true }
    );
    if (!updateCharactersIndianaJones) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersIndianaJones);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterIndianaJones = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterIndianaJones = await CharacterIndianaJones.findByIdAndDelete(id);
    if (!deleteCharacterIndianaJones) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterIndianaJones);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersIndianaJones,
  getOneCharacterIndianaJones,
  postCharacterIndianaJones,
  putCharacterIndianaJones,
  deleteCharacterIndianaJones,
};
