const CharacterStarTrek = require('../../models/models.StarTrek/characters.StarTrek.model');

const getCharactersStarTrek = async (req, res) => {
  try {
    const allCharactersStarTrek = await CharacterStarTrek.find();
    return res.status(200).json(allCharactersStarTrek);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterStarTrek = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterStarTrek = await CharacterStarTrek.findById(id)
      .populate('planetStarTrek')
      .populate('countryStarTrek');
    return res.status(200).json(oneCharacterStarTrek);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterStarTrek = async (req, res) => {
  try {
    const newCharacterStarTrek = new CharacterStarTrek(req.body);
    const createdCharacterStarTrek = await newCharacterStarTrek.save();
    return res.status(201).json(createdCharacterStarTrek);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterStarTrek = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersStarTrek = new CountryStarTrek(req.body);
    putCharactersStarTrek._id = id;
    const updateCharactersStarTrek = await CharacterStarTrek.findByIdAndUpdate(
      id,
      putCharactersStarTrek,
      { new: true }
    );
    if (!updateCharactersStarTrek) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersStarTrek);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterStarTrek = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterStarTrek = await CharacterStarTrek.findByIdAndDelete(id);
    if (!deleteCharacterStarTrek) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterStarTrek);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersStarTrek,
  getOneCharacterStarTrek,
  postCharacterStarTrek,
  putCharacterStarTrek,
  deleteCharacterStarTrek,
};
