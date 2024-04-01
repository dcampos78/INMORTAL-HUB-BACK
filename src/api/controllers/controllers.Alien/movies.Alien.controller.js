const MovieAlien = require('../../models/models.Alien/movies.Alien.model');

const getMoviesAlien = async (req, res) => {
  try {
    const allMoviesAlien = await MovieAlien.find();
    return res.status(200).json(allMoviesAlien);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneMovieAlien = async (req, res) => {
  try {
    const { id } = req.params;
    const oneMovieAlien = await MovieAlien.findById(id);
    return res.status(200).json(oneMovieAlien);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postMovieAlien = async (req, res) => {
  try {
    const newMovieAlien = new MovieAlien(req.body);
    const createdMovieAlien = await newMovieAlien.save();
    return res.status(201).json(createdMovieAlien);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};

const putMovieAlien = async (req, res) => {
  try {
    const { id } = req.params;
    const putMoviesAlien = new MovieAlien(req.body);
    putMoviesAlien._id = id;
    const updateMoviesAlien = await MovieAlien.findByIdAndUpdate(id, putMoviesAlien, {
      new: true,
    });
    if (!updateMoviesAlien) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(updateMoviesAlien);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteMovieAlien = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMovieAlien = await MovieAlien.findByIdAndDelete(id);
    if (!deleteMovieAlien) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(deleteMovieAlien);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getMoviesAlien,
  getOneMovieAlien,
  postMovieAlien,
  putMovieAlien,
  deleteMovieAlien,
};
