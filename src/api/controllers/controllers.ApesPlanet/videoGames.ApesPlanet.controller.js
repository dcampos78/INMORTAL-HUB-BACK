const VideoGamesApesPlanet = require('../../models/models.ApesPlanet/videoGames.ApesPlanet.model');

const getVideoGamesApesPlanet = async (req, res) => {
  try {
    const allVideoGamesApesPlanet = await VideoGamesApesPlanet.find();
    return res.status(200).json(allVideoGamesApesPlanet);
  } catch (error) {
    return res.status(500).json(error);
  }
};


const getOneVideoGameApesPlanet = async (req, res) => {
  try {
    const { id } = req.params;
    const oneVideoGameApesPlanet = await VideoGamesApesPlanet.findById(id);
    return res.status(200).json(oneVideoGameApesPlanet);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postVideoGameApesPlanet = async (req, res) => {
  try {
    const newVideoGameApesPlanet = new VideoGamesApesPlanet(req.body);
    const createdVideoGameApesPlanet = await newVideoGameApesPlanet.save();
    return res.status(201).json(createdVideoGameApesPlanet);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putVideoGameApesPlanet = async (req, res) => {
  try {
    const { id } = req.params;
    const putVideoGamesApesPlanet = new VideoGamesApesPlanet(req.body);
    putvs._id = id;
    const updateVideoGamesApesPlanet = await VideoGamesApesPlanet.findByIdAndUpdate(id, putVideoGamesApesPlanet, {
      new: true,
    });
    if (!updateVideoGamesApesPlanet) {
      return res.status(404).json({ message: 'VideoGame not found' });
    }
    return res.status(200).json(updateVideoGamesApesPlanet);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteVideoGameApesPlanet = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteVideoGameApesPlanet = await VideoGamesApesPlanet.findByIdAndDelete(id);
    if (!deleteVideoGameApesPlanet) {
      return res.status(404).json({ message: 'VideoGame not found' });
    }
    return res.status(200).json(deleteVideoGameApesPlanet);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getVideoGamesApesPlanet, getOneVideoGameApesPlanet, postVideoGameApesPlanet, putVideoGameApesPlanet, deleteVideoGameApesPlanet };
