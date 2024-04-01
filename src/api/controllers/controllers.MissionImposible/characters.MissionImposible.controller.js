const CharacterMissionImposible = require('../../models/models.MissionImposible/characters.MissionImposible.model');

const getCharactersMissionImposible = async (req, res) => {
  try {
    const allCharactersMissionImposible = await CharacterMissionImposible.find();
    return res.status(200).json(allCharactersMissionImposible);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterMissionImposible = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterMissionImposible = await CharacterMissionImposible.findById(id)
      .populate('planetMissionImposible')
      .populate('countryMissionImposible');
    return res.status(200).json(oneCharacterMissionImposible);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterMissionImposible = async (req, res) => {
  try {
    const newCharacterMissionImposible = new CharacterMissionImposible(req.body);
    const createdCharacterMissionImposible = await newCharacterMissionImposible.save();
    return res.status(201).json(createdCharacterMissionImposible);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterMissionImposible = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersMissionImposible = new CountryMissionImposible(req.body);
    putCharactersMissionImposible._id = id;
    const updateCharactersMissionImposible = await CharacterMissionImposible.findByIdAndUpdate(
      id,
      putCharactersMissionImposible,
      { new: true }
    );
    if (!updateCharactersMissionImposible) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersMissionImposible);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterMissionImposible = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterMissionImposible = await CharacterMissionImposible.findByIdAndDelete(id);
    if (!deleteCharacterMissionImposible) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterMissionImposible);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersMissionImposible,
  getOneCharacterMissionImposible,
  postCharacterMissionImposible,
  putCharacterMissionImposible,
  deleteCharacterMissionImposible,
};
