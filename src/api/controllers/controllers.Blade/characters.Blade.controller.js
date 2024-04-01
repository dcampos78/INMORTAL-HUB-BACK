const CharacterBlade = require('../../models/models.Blade/characters.Blade.model');

const getCharactersBlade = async (req, res) => {
  try {
    const allCharactersBlade = await CharacterBlade.find();
    return res.status(200).json(allCharactersBlade);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterBlade = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterBlade = await CharacterBlade.findById(id)
      .populate('planetBlade')
      .populate('countryBlade');
    return res.status(200).json(oneCharacterBlade);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterBlade = async (req, res) => {
  try {
    const newCharacterBlade = new CharacterBlade(req.body);
    const createdCharacterBlade = await newCharacterBlade.save();
    return res.status(201).json(createdCharacterBlade);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterBlade = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersBlade = new CountryBlade(req.body);
    putCharactersBlade._id = id;
    const updateCharactersBlade = await CharacterBlade.findByIdAndUpdate(
      id,
      putCharactersBlade,
      { new: true }
    );
    if (!updateCharactersBlade) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersBlade);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterBlade = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterBlade = await CharacterBlade.findByIdAndDelete(id);
    if (!deleteCharacterBlade) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterBlade);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersBlade,
  getOneCharacterBlade,
  postCharacterBlade,
  putCharacterBlade,
  deleteCharacterBlade,
};
