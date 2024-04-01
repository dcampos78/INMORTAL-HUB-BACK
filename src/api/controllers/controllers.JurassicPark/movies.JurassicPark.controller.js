const MovieJurassicPark = require('../../models/models.JurassicPark/movies.JurassicPark.model');

const getMoviesJurassicPark = async (req, res) => {
  try {
    const allMoviesJurassicPark = await MovieJurassicPark.find();
    return res.status(200).json(allMoviesJurassicPark);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneMovieJurassicPark = async (req, res) => {
  try {
    const { id } = req.params;
    const oneMovieJurassicPark = await MovieJurassicPark.findById(id);
    return res.status(200).json(oneMovieJurassicPark);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postMovieJurassicPark = async (req, res) => {
  try {
    const newMovieJurassicPark = new MovieJurassicPark(req.body);
    const createdMovieJurassicPark = await newMovieJurassicPark.save();
    return res.status(201).json(createdMovieJurassicPark);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};

const putMovieJurassicPark = async (req, res) => {
  try {
    const { id } = req.params;
    const putMoviesJurassicPark = new MovieJurassicPark(req.body);
    putMoviesJurassicPark._id = id;
    const updateMoviesJurassicPark = await MovieJurassicPark.findByIdAndUpdate(id, putMoviesJurassicPark, {
      new: true,
    });
    if (!updateMoviesJurassicPark) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(updateMoviesJurassicPark);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteMovieJurassicPark = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMovieJurassicPark = await MovieJurassicPark.findByIdAndDelete(id);
    if (!deleteMovieJurassicPark) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(deleteMovieJurassicPark);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getMoviesJurassicPark,
  getOneMovieJurassicPark,
  postMovieJurassicPark,
  putMovieJurassicPark,
  deleteMovieJurassicPark,
};
