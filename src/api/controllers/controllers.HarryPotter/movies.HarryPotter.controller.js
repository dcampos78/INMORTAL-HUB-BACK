const MovieHarryPotter = require('../../models/models.HarryPotter/movies.HarryPotter.model');

const getMoviesHarryPotter = async (req, res) => {
  try {
    const allMoviesHarryPotter = await MovieHarryPotter.find();
    return res.status(200).json(allMoviesHarryPotter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneMovieHarryPotter = async (req, res) => {
  try {
    const { id } = req.params;
    const oneMovieHarryPotter = await MovieHarryPotter.findById(id);
    return res.status(200).json(oneMovieHarryPotter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postMovieHarryPotter = async (req, res) => {
  try {
    const newMovieHarryPotter = new MovieHarryPotter(req.body);
    const createdMovieHarryPotter = await newMovieHarryPotter.save();
    return res.status(201).json(createdMovieHarryPotter);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};

const putMovieHarryPotter = async (req, res) => {
  try {
    const { id } = req.params;
    const putMoviesHarryPotter = new MovieHarryPotter(req.body);
    putMoviesHarryPotter._id = id;
    const updateMoviesHarryPotter = await MovieHarryPotter.findByIdAndUpdate(id, putMoviesHarryPotter, {
      new: true,
    });
    if (!updateMoviesHarryPotter) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(updateMoviesHarryPotter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteMovieHarryPotter = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMovieHarryPotter = await MovieHarryPotter.findByIdAndDelete(id);
    if (!deleteMovieHarryPotter) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(deleteMovieHarryPotter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getMoviesHarryPotter,
  getOneMovieHarryPotter,
  postMovieHarryPotter,
  putMovieHarryPotter,
  deleteMovieHarryPotter,
};
