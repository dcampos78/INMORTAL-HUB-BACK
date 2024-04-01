const MovieIndianaJones = require('../../models/models.IndianaJones/movies.IndianaJones.model');

const getMoviesIndianaJones = async (req, res) => {
  try {
    const allMoviesIndianaJones = await MovieIndianaJones.find();
    return res.status(200).json(allMoviesIndianaJones);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneMovieIndianaJones = async (req, res) => {
  try {
    const { id } = req.params;
    const oneMovieIndianaJones = await MovieIndianaJones.findById(id);
    return res.status(200).json(oneMovieIndianaJones);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postMovieIndianaJones = async (req, res) => {
  try {
    const newMovieIndianaJones = new MovieIndianaJones(req.body);
    const createdMovieIndianaJones = await newMovieIndianaJones.save();
    return res.status(201).json(createdMovieIndianaJones);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};

const putMovieIndianaJones = async (req, res) => {
  try {
    const { id } = req.params;
    const putMoviesIndianaJones = new MovieIndianaJones(req.body);
    putMoviesIndianaJones._id = id;
    const updateMoviesIndianaJones = await MovieIndianaJones.findByIdAndUpdate(id, putMoviesIndianaJones, {
      new: true,
    });
    if (!updateMoviesIndianaJones) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(updateMoviesIndianaJones);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteMovieIndianaJones = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMovieIndianaJones = await MovieIndianaJones.findByIdAndDelete(id);
    if (!deleteMovieIndianaJones) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(deleteMovieIndianaJones);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getMoviesIndianaJones,
  getOneMovieIndianaJones,
  postMovieIndianaJones,
  putMovieIndianaJones,
  deleteMovieIndianaJones,
};
