const VideoGamesBlade = require('../../models/models.Blade/videoGames.Blade.model');

const getVideoGamesBlade = async (req, res) => {
  try {
    const allVideoGamesBlade = await VideoGamesBlade.find();
    return res.status(200).json(allVideoGamesBlade);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneVideoGameBlade = async (req, res) => {
  try {
    const { id } = req.params;
    const oneVideoGameBlade = await VideoGamesBlade.findById(id);
    return res.status(200).json(oneVideoGameBlade);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postVideoGameBlade = async (req, res) => {
  try {
    const newVideoGameBlade = new VideoGamesBlade(req.body);
    const createdVideoGameBlade = await newVideoGameBlade.save();
    return res.status(201).json(createdVideoGameBlade);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putVideoGameBlade = async (req, res) => {
  try {
    const { id } = req.params;
    const putVideoGamesBlade = new VideoGamesBlade(req.body);
    putvs._id = id;
    const updateVideoGamesBlade = await VideoGamesBlade.findByIdAndUpdate(id, putVideoGamesBlade, {
      new: true,
    });
    if (!updateVideoGamesBlade) {
      return res.status(404).json({ message: 'VideoGame not found' });
    }
    return res.status(200).json(updateVideoGamesBlade);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteVideoGameBlade = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteVideoGameBlade = await VideoGamesBlade.findByIdAndDelete(id);
    if (!deleteVideoGameBlade) {
      return res.status(404).json({ message: 'VideoGame not found' });
    }
    return res.status(200).json(deleteVideoGameBlade);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getVideoGamesBlade, getOneVideoGameBlade, postVideoGameBlade, putVideoGameBlade, deleteVideoGameBlade };
