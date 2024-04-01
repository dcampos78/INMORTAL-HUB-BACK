const MovieCrepusculo = require('../../models/models.Crepusculo/movies.Crepusculo.model');

const getMoviesCrepusculo = async (req, res) => {
  try {
    const allMoviesCrepusculo = await MovieCrepusculo.find();
    return res.status(200).json(allMoviesCrepusculo);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneMovieCrepusculo = async (req, res) => {
  try {
    const { id } = req.params;
    const oneMovieCrepusculo = await MovieCrepusculo.findById(id);
    return res.status(200).json(oneMovieCrepusculo);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postMovieCrepusculo = async (req, res) => {
  try {
    const newMovieCrepusculo = new MovieCrepusculo(req.body);
    const createdMovieCrepusculo = await newMovieCrepusculo.save();
    return res.status(201).json(createdMovieCrepusculo);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};

const putMovieCrepusculo = async (req, res) => {
  try {
    const { id } = req.params;
    const putMoviesCrepusculo = new MovieCrepusculo(req.body);
    putMoviesCrepusculo._id = id;
    const updateMoviesCrepusculo = await MovieCrepusculo.findByIdAndUpdate(id, putMoviesCrepusculo, {
      new: true,
    });
    if (!updateMoviesCrepusculo) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(updateMoviesCrepusculo);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteMovieCrepusculo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMovieCrepusculo = await MovieCrepusculo.findByIdAndDelete(id);
    if (!deleteMovieCrepusculo) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(deleteMovieCrepusculo);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getMoviesCrepusculo,
  getOneMovieCrepusculo,
  postMovieCrepusculo,
  putMovieCrepusculo,
  deleteMovieCrepusculo,
};
