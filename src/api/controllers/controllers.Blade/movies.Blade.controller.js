const MovieBlade = require('../../models/models.Blade/movies.Blade.model');

const getMoviesBlade = async (req, res) => {
  try {
    const allMoviesBlade = await MovieBlade.find();
    return res.status(200).json(allMoviesBlade);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneMovieBlade = async (req, res) => {
  try {
    const { id } = req.params;
    const oneMovieBlade = await MovieBlade.findById(id).populate('movieBlade');
    return res.status(200).json(oneMovieBlade);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postMovieBlade = async (req, res) => {
  try {
    const newMovieBlade = new MovieBlade(req.body);
    const createdMovieBlade = await newMovieBlade.save();
    return res.status(201).json(createdMovieBlade);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};
const putMovieBlade = async (req, res) => {
  try {
    const { id } = req.params;
    const putMoviesBlade = new MovieBlade(req.body);
    putMoviesBlade._id = id;
    const updateMoviesBlade = await MovieBlade.findByIdAndUpdate(id, putMoviesBlade, {
      new: true,
    });
    if (!updatevs) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(updateMoviesBlade);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteMovieBlade = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMovieBlade = await MovieBlade.findByIdAndDelete(id);
    if (!deleteMovieBlade) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(deleteMovieBlade);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getMoviesBlade,
  getOneMovieBlade,
  postMovieBlade,
  putMovieBlade,
  deleteMovieBlade,
};
