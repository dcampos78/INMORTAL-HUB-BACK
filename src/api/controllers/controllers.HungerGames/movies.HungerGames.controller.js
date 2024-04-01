const MovieHungerGames = require('../../models/models.HungerGames/movies.HungerGames.model');

const getMoviesHungerGames = async (req, res) => {
  try {
    const allMoviesHungerGames = await MovieHungerGames.find();
    return res.status(200).json(allMoviesHungerGames);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneMovieHungerGames = async (req, res) => {
  try {
    const { id } = req.params;
    const oneMovieHungerGames = await MovieHungerGames.findById(id);
    return res.status(200).json(oneMovieHungerGames);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postMovieHungerGames = async (req, res) => {
  try {
    const newMovieHungerGames = new MovieHungerGames(req.body);
    const createdMovieHungerGames = await newMovieHungerGames.save();
    return res.status(201).json(createdMovieHungerGames);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};

const putMovieHungerGames = async (req, res) => {
  try {
    const { id } = req.params;
    const putMoviesHungerGames = new MovieHungerGames(req.body);
    putMoviesHungerGames._id = id;
    const updateMoviesHungerGames = await MovieHungerGames.findByIdAndUpdate(id, putMoviesHungerGames, {
      new: true,
    });
    if (!updateMoviesHungerGames) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(updateMoviesHungerGames);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteMovieHungerGames = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMovieHungerGames = await MovieHungerGames.findByIdAndDelete(id);
    if (!deleteMovieHungerGames) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(deleteMovieHungerGames);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getMoviesHungerGames,
  getOneMovieHungerGames,
  postMovieHungerGames,
  putMovieHungerGames,
  deleteMovieHungerGames,
};
