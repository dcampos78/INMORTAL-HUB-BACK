const CharacterJurassicPark = require('../../models/models.JurassicPark/characters.JurassicPark.model');

const getCharactersJurassicPark = async (req, res) => {
  try {
    const allCharactersJurassicPark = await CharacterJurassicPark.find();
    return res.status(200).json(allCharactersJurassicPark);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterJurassicPark = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterJurassicPark = await CharacterJurassicPark.findById(id)
      .populate('planetJurassicPark')
      .populate('countryJurassicPark');
    return res.status(200).json(oneCharacterJurassicPark);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterJurassicPark = async (req, res) => {
  try {
    const newCharacterJurassicPark = new CharacterJurassicPark(req.body);
    const createdCharacterJurassicPark = await newCharacterJurassicPark.save();
    return res.status(201).json(createdCharacterJurassicPark);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterJurassicPark = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersJurassicPark = new CountryJurassicPark(req.body);
    putCharactersJurassicPark._id = id;
    const updateCharactersJurassicPark = await CharacterJurassicPark.findByIdAndUpdate(
      id,
      putCharactersJurassicPark,
      { new: true }
    );
    if (!updateCharactersJurassicPark) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersJurassicPark);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterJurassicPark = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterJurassicPark = await CharacterJurassicPark.findByIdAndDelete(id);
    if (!deleteCharacterJurassicPark) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterJurassicPark);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersJurassicPark,
  getOneCharacterJurassicPark,
  postCharacterJurassicPark,
  putCharacterJurassicPark,
  deleteCharacterJurassicPark,
};
