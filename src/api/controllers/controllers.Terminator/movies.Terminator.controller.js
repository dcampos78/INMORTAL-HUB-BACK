const MovieTerminator = require('../../models/models.Terminator/movies.Terminator.model');

const getMoviesTerminator = async (req, res) => {
  try {
    const allMoviesTerminator = await MovieTerminator.find();
    return res.status(200).json(allMoviesTerminator);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneMovieTerminator = async (req, res) => {
  try {
    const { id } = req.params;
    const oneMovieTerminator = await MovieTerminator.findById(id);
    return res.status(200).json(oneMovieTerminator);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postMovieTerminator = async (req, res) => {
  try {
    const newMovieTerminator = new MovieTerminator(req.body);
    const createdMovieTerminator = await newMovieTerminator.save();
    return res.status(201).json(createdMovieTerminator);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};

const putMovieTerminator = async (req, res) => {
  try {
    const { id } = req.params;
    const putMoviesTerminator = new MovieTerminator(req.body);
    putMoviesTerminator._id = id;
    const updateMoviesTerminator = await MovieTerminator.findByIdAndUpdate(id, putMoviesTerminator, {
      new: true,
    });
    if (!updateMoviesTerminator) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(updateMoviesTerminator);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteMovieTerminator = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMovieTerminator = await MovieTerminator.findByIdAndDelete(id);
    if (!deleteMovieTerminator) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(deleteMovieTerminator);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getMoviesTerminator,
  getOneMovieTerminator,
  postMovieTerminator,
  putMovieTerminator,
  deleteMovieTerminator,
};
