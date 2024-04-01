const MovieMissionImposible = require('../../models/models.MissionImposible/movies.MissionImposible.model');

const getMoviesMissionImposible = async (req, res) => {
  try {
    const allMoviesMissionImposible = await MovieMissionImposible.find();
    return res.status(200).json(allMoviesMissionImposible);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneMovieMissionImposible = async (req, res) => {
  try {
    const { id } = req.params;
    const oneMovieMissionImposible = await MovieMissionImposible.findById(id);
    return res.status(200).json(oneMovieMissionImposible);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postMovieMissionImposible = async (req, res) => {
  try {
    const newMovieMissionImposible = new MovieMissionImposible(req.body);
    const createdMovieMissionImposible = await newMovieMissionImposible.save();
    return res.status(201).json(createdMovieMissionImposible);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};

const putMovieMissionImposible = async (req, res) => {
  try {
    const { id } = req.params;
    const putMoviesMissionImposible = new MovieMissionImposible(req.body);
    putMoviesMissionImposible._id = id;
    const updateMoviesMissionImposible = await MovieMissionImposible.findByIdAndUpdate(id, putMoviesMissionImposible, {
      new: true,
    });
    if (!updateMoviesMissionImposible) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(updateMoviesMissionImposible);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteMovieMissionImposible = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMovieMissionImposible = await MovieMissionImposible.findByIdAndDelete(id);
    if (!deleteMovieMissionImposible) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(deleteMovieMissionImposible);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getMoviesMissionImposible,
  getOneMovieMissionImposible,
  postMovieMissionImposible,
  putMovieMissionImposible,
  deleteMovieMissionImposible,
};
