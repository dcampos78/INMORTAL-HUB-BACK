const MovieLordOfTheRings = require('../../models/models.LordOfTheRings/movies.LordOfTheRings.model');

const getMoviesLordOfTheRings = async (req, res) => {
  try {
    const allMoviesLordOfTheRings = await MovieLordOfTheRings.find();
    return res.status(200).json(allMoviesLordOfTheRings);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneMovieLordOfTheRings = async (req, res) => {
  try {
    const { id } = req.params;
    const oneMovieLordOfTheRings = await MovieLordOfTheRings.findById(id);
    return res.status(200).json(oneMovieLordOfTheRings);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postMovieLordOfTheRings = async (req, res) => {
  try {
    const newMovieLordOfTheRings = new MovieLordOfTheRings(req.body);
    const createdMovieLordOfTheRings = await newMovieLordOfTheRings.save();
    return res.status(201).json(createdMovieLordOfTheRings);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};

const putMovieLordOfTheRings = async (req, res) => {
  try {
    const { id } = req.params;
    const putMoviesLordOfTheRings = new MovieLordOfTheRings(req.body);
    putMoviesLordOfTheRings._id = id;
    const updateMoviesLordOfTheRings = await MovieLordOfTheRings.findByIdAndUpdate(id, putMoviesLordOfTheRings, {
      new: true,
    });
    if (!updateMoviesLordOfTheRings) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(updateMoviesLordOfTheRings);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteMovieLordOfTheRings = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMovieLordOfTheRings = await MovieLordOfTheRings.findByIdAndDelete(id);
    if (!deleteMovieLordOfTheRings) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(deleteMovieLordOfTheRings);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getMoviesLordOfTheRings,
  getOneMovieLordOfTheRings,
  postMovieLordOfTheRings,
  putMovieLordOfTheRings,
  deleteMovieLordOfTheRings,
};
