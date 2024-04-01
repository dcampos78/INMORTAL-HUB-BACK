const MovieDune = require('../../models/models.dune/movies.dune.model');

const getMoviesDune = async (req, res) => {
  try {
    const allMoviesDune = await MovieDune.find();
    return res.status(200).json(allMoviesDune);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneMovieDune = async (req, res) => {
  try {
    const { id } = req.params;
    const oneMovieDune = await MovieDune.findById(id).populate('movieDune');
    return res.status(200).json(oneMovieDune);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postMovieDune = async (req, res) => {
  try {
    const newMovieDune = new MovieDune(req.body);
    const createdMovieDune = await newMovieDune.save();
    return res.status(201).json(createdMovieDune);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};
const putMovieDune = async (req, res) => {
  try {
    const { id } = req.params;
    const putMoviesDune = new MovieDune(req.body);
    putMoviesDune._id = id;
    const updateMoviesDune = await MovieDune.findByIdAndUpdate(id, putMoviesDune, {
      new: true,
    });
    if (!updatevs) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(updateMoviesDune);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteMovieDune = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMovieDune = await MovieDune.findByIdAndDelete(id);
    if (!deleteMovieDune) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(deleteMovieDune);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getMoviesDune,
  getOneMovieDune,
  postMovieDune,
  putMovieDune,
  deleteMovieDune,
};
