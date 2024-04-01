const VideoGamesAlien = require('../../models/models.Alien/videoGames.Alien.model');

const getVideoGamesAlien = async (req, res) => {
  try {
    const allVideoGamesAlien = await VideoGamesAlien.find();
    return res.status(200).json(allVideoGamesAlien);
  } catch (error) {
    return res.status(500).json(error);
  }
};


const getOneVideoGameAlien = async (req, res) => {
  try {
    const { id } = req.params;
    const oneVideoGameAlien = await VideoGamesAlien.findById(id);
    return res.status(200).json(oneVideoGameAlien);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postVideoGameAlien = async (req, res) => {
  try {
    const newVideoGameAlien = new VideoGamesAlien(req.body);
    const createdVideoGameAlien = await newVideoGameAlien.save();
    return res.status(201).json(createdVideoGameAlien);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putVideoGameAlien = async (req, res) => {
  try {
    const { id } = req.params;
    const putVideoGamesAlien = new VideoGamesAlien(req.body);
    putvs._id = id;
    const updateVideoGamesAlien = await VideoGamesAlien.findByIdAndUpdate(id, putVideoGamesAlien, {
      new: true,
    });
    if (!updateVideoGamesAlien) {
      return res.status(404).json({ message: 'VideoGame not found' });
    }
    return res.status(200).json(updateVideoGamesAlien);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteVideoGameAlien = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteVideoGameAlien = await VideoGamesAlien.findByIdAndDelete(id);
    if (!deleteVideoGameAlien) {
      return res.status(404).json({ message: 'VideoGame not found' });
    }
    return res.status(200).json(deleteVideoGameAlien);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getVideoGamesAlien, getOneVideoGameAlien, postVideoGameAlien, putVideoGameAlien, deleteVideoGameAlien };
