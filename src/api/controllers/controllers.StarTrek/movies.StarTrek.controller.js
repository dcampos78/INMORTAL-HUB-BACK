const MovieStarTrek = require('../../models/models.StarTrek/movies.StarTrek.model');

const getMoviesStarTrek = async (req, res) => {
  try {
    const allMoviesStarTrek = await MovieStarTrek.find();
    return res.status(200).json(allMoviesStarTrek);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneMovieStarTrek = async (req, res) => {
  try {
    const { id } = req.params;
    const oneMovieStarTrek = await MovieStarTrek.findById(id);
    return res.status(200).json(oneMovieStarTrek);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postMovieStarTrek = async (req, res) => {
  try {
    const newMovieStarTrek = new MovieStarTrek(req.body);
    const createdMovieStarTrek = await newMovieStarTrek.save();
    return res.status(201).json(createdMovieStarTrek);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};

const putMovieStarTrek = async (req, res) => {
  try {
    const { id } = req.params;
    const putMoviesStarTrek = new MovieStarTrek(req.body);
    putMoviesStarTrek._id = id;
    const updateMoviesStarTrek = await MovieStarTrek.findByIdAndUpdate(id, putMoviesStarTrek, {
      new: true,
    });
    if (!updateMoviesStarTrek) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(updateMoviesStarTrek);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteMovieStarTrek = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMovieStarTrek = await MovieStarTrek.findByIdAndDelete(id);
    if (!deleteMovieStarTrek) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(deleteMovieStarTrek);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getMoviesStarTrek,
  getOneMovieStarTrek,
  postMovieStarTrek,
  putMovieStarTrek,
  deleteMovieStarTrek,
};
