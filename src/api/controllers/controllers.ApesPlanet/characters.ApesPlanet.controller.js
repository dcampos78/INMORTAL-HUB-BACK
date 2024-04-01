const CharacterApesPlanet = require('../../models/models.ApesPlanet/characters.ApesPlanet.model');

const getCharactersApesPlanet = async (req, res) => {
  try {
    const allCharactersApesPlanet = await CharacterApesPlanet.find();
    return res.status(200).json(allCharactersApesPlanet);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterApesPlanet = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterApesPlanet = await CharacterApesPlanet.findById(id)
      .populate('planetApesPlanet')
      .populate('countryApesPlanet');
    return res.status(200).json(oneCharacterApesPlanet);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterApesPlanet = async (req, res) => {
  try {
    const newCharacterApesPlanet = new CharacterApesPlanet(req.body);
    const createdCharacterApesPlanet = await newCharacterApesPlanet.save();
    return res.status(201).json(createdCharacterApesPlanet);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterApesPlanet = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersApesPlanet = new CountryApesPlanet(req.body);
    putCharactersApesPlanet._id = id;
    const updateCharactersApesPlanet = await CharacterApesPlanet.findByIdAndUpdate(
      id,
      putCharactersApesPlanet,
      { new: true }
    );
    if (!updateCharactersApesPlanet) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersApesPlanet);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterApesPlanet = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterApesPlanet = await CharacterApesPlanet.findByIdAndDelete(id);
    if (!deleteCharacterApesPlanet) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterApesPlanet);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersApesPlanet,
  getOneCharacterApesPlanet,
  postCharacterApesPlanet,
  putCharacterApesPlanet,
  deleteCharacterApesPlanet,
};
