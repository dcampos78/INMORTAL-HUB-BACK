const CharacterTerminator = require('../../models/models.Terminator/characters.Terminator.model');

const getCharactersTerminator = async (req, res) => {
  try {
    const allCharactersTerminator = await CharacterTerminator.find();
    return res.status(200).json(allCharactersTerminator);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterTerminator = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterTerminator = await CharacterTerminator.findById(id)
      .populate('planetTerminator')
      .populate('countryTerminator');
    return res.status(200).json(oneCharacterTerminator);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterTerminator = async (req, res) => {
  try {
    const newCharacterTerminator = new CharacterTerminator(req.body);
    const createdCharacterTerminator = await newCharacterTerminator.save();
    return res.status(201).json(createdCharacterTerminator);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterTerminator = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersTerminator = new CountryTerminator(req.body);
    putCharactersTerminator._id = id;
    const updateCharactersTerminator = await CharacterTerminator.findByIdAndUpdate(
      id,
      putCharactersTerminator,
      { new: true }
    );
    if (!updateCharactersTerminator) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersTerminator);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterTerminator = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterTerminator = await CharacterTerminator.findByIdAndDelete(id);
    if (!deleteCharacterTerminator) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterTerminator);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersTerminator,
  getOneCharacterTerminator,
  postCharacterTerminator,
  putCharacterTerminator,
  deleteCharacterTerminator,
};
