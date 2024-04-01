const VideoGamesMissionImposible = require('../../models/models.MissionImposible/VideoGames.MissionImposible.model');

const getVideoGamesMissionImposible = async (req, res) => {
  try {
    const allVideoGamesMissionImposible = await VideoGamesMissionImposible.find();
    return res.status(200).json(allVideoGamesMissionImposible);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneVideoGameMissionImposible = async (req, res) => {
  try {
    const { id } = req.params;
    const oneVideoGameMissionImposible = await VideoGamesMissionImposible.findById(id);
    return res.status(200).json(oneVideoGameMissionImposible);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postVideoGameMissionImposible = async (req, res) => {
  try {
    const newVideoGameMissionImposible = new VideoGamesMissionImposible(req.body);
    const createdVideoGameMissionImposible = await newVideoGameMissionImposible.save();
    return res.status(201).json(createdVideoGameMissionImposible);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putVideoGameMissionImposible = async (req, res) => {
  try {
    const { id } = req.params;
    const putVideoGamesMissionImposible = new VideoGamesMissionImposible(req.body);
    putvs._id = id;
    const updateVideoGamesMissionImposible = await VideoGamesMissionImposible.findByIdAndUpdate(id, putVideoGamesMissionImposible, {
      new: true,
    });
    if (!updateVideoGamesMissionImposible) {
      return res.status(404).json({ message: 'VideoGame not found' });
    }
    return res.status(200).json(updateVideoGamesMissionImposible);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteVideoGameMissionImposible = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteVideoGameMissionImposible = await VideoGamesMissionImposible.findByIdAndDelete(id);
    if (!deleteVideoGameMissionImposible) {
      return res.status(404).json({ message: 'VideoGame not found' });
    }
    return res.status(200).json(deleteVideoGameMissionImposible);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getVideoGamesMissionImposible, getOneVideoGameMissionImposible, postVideoGameMissionImposible, putVideoGameMissionImposible, deleteVideoGameMissionImposible };
