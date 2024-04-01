const CharacterCrepusculo = require('../../models/models.Crepusculo/characters.Crepusculo.model');

const getCharactersCrepusculo = async (req, res) => {
  try {
    const allCharactersCrepusculo = await CharacterCrepusculo.find();
    return res.status(200).json(allCharactersCrepusculo);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterCrepusculo = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterCrepusculo = await CharacterCrepusculo.findById(id)
      .populate('planetCrepusculo')
      .populate('countryCrepusculo');
    return res.status(200).json(oneCharacterCrepusculo);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterCrepusculo = async (req, res) => {
  try {
    const newCharacterCrepusculo = new CharacterCrepusculo(req.body);
    const createdCharacterCrepusculo = await newCharacterCrepusculo.save();
    return res.status(201).json(createdCharacterCrepusculo);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterCrepusculo = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersCrepusculo = new CountryCrepusculo(req.body);
    putCharactersCrepusculo._id = id;
    const updateCharactersCrepusculo = await CharacterCrepusculo.findByIdAndUpdate(
      id,
      putCharactersCrepusculo,
      { new: true }
    );
    if (!updateCharactersCrepusculo) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersCrepusculo);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterCrepusculo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterCrepusculo = await CharacterCrepusculo.findByIdAndDelete(id);
    if (!deleteCharacterCrepusculo) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterCrepusculo);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersCrepusculo,
  getOneCharacterCrepusculo,
  postCharacterCrepusculo,
  putCharacterCrepusculo,
  deleteCharacterCrepusculo,
};
