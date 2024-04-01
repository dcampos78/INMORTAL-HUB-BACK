const MovieApesPlanet = require('../../models/models.ApesPlanet/movies.ApesPlanet.model');

const getMoviesApesPlanet = async (req, res) => {
  try {
    const allMoviesApesPlanet = await MovieApesPlanet.find();
    return res.status(200).json(allMoviesApesPlanet);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneMovieApesPlanet = async (req, res) => {
  try {
    const { id } = req.params;
    const oneMovieApesPlanet = await MovieApesPlanet.findById(id);
    return res.status(200).json(oneMovieApesPlanet);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postMovieApesPlanet = async (req, res) => {
  try {
    const newMovieApesPlanet = new MovieApesPlanet(req.body);
    const createdMovieApesPlanet = await newMovieApesPlanet.save();
    return res.status(201).json(createdMovieApesPlanet);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};

const putMovieApesPlanet = async (req, res) => {
  try {
    const { id } = req.params;
    const putMoviesApesPlanet = new MovieApesPlanet(req.body);
    putMoviesApesPlanet._id = id;
    const updateMoviesApesPlanet = await MovieApesPlanet.findByIdAndUpdate(id, putMoviesApesPlanet, {
      new: true,
    });
    if (!updateMoviesApesPlanet) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(updateMoviesApesPlanet);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteMovieApesPlanet = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMovieApesPlanet = await MovieApesPlanet.findByIdAndDelete(id);
    if (!deleteMovieApesPlanet) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(deleteMovieApesPlanet);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getMoviesApesPlanet,
  getOneMovieApesPlanet,
  postMovieApesPlanet,
  putMovieApesPlanet,
  deleteMovieApesPlanet,
};
