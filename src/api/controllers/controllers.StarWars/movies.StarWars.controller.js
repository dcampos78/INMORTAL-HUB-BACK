const MovieStarWars = require('../../models/models.StarWars/movies.StarWars.model');

const getMoviesStarWars = async (req, res) => {
  try {
    const allMoviesStarWars = await MovieStarWars.find();
    return res.status(200).json(allMoviesStarWars);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneMovieStarWars = async (req, res) => {
  try {
    const { id } = req.params;
    const oneMovieStarWars = await MovieStarWars.findById(id);
    return res.status(200).json(oneMovieStarWars);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postMovieStarWars = async (req, res) => {
  try {
    const newMovieStarWars = new MovieStarWars(req.body);
    const createdMovieStarWars = await newMovieStarWars.save();
    return res.status(201).json(createdMovieStarWars);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};

const putMovieStarWars = async (req, res) => {
  try {
    const { id } = req.params;
    const putMoviesStarWars = new MovieStarWars(req.body);
    putMoviesStarWars._id = id;
    const updateMoviesStarWars = await MovieStarWars.findByIdAndUpdate(id, putMoviesStarWars, {
      new: true,
    });
    if (!updateMoviesStarWars) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(updateMoviesStarWars);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteMovieStarWars = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMovieStarWars = await MovieStarWars.findByIdAndDelete(id);
    if (!deleteMovieStarWars) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(deleteMovieStarWars);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getMoviesStarWars,
  getOneMovieStarWars,
  postMovieStarWars,
  putMovieStarWars,
  deleteMovieStarWars,
};
