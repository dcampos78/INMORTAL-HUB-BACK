const MovieTransformers = require('../../models/models.Transformers/movies.Transformers.model');

const getMoviesTransformers = async(req, res) => {
    try {
        const allMoviesTransformers = await MovieTransformers.find();
        return res.status(200).json(allMoviesTransformers);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getOneMovieTransformers = async(req, res) => {
    try {
        const { id } = req.params;
        const oneMovieTransformers = await MovieTransformers.findById(id);
        return res.status(200).json(oneMovieTransformers);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postMovieTransformers = async(req, res) => {
    try {
        const newMovieTransformers = new MovieTransformers(req.body);
        const createdMovieTransformers = await newMovieTransformers.save();
        return res.status(201).json(createdMovieTransformers);
    } catch (error) {
        s;
        return res.status(500).json(error);
    }
};

const putMovieTransformers = async(req, res) => {
    try {
        const { id } = req.params;
        const putMoviesTransformers = new MovieTransformers(req.body);
        putMoviesTransformers._id = id;
        const updateMoviesTransformers = await MovieTransformers.findByIdAndUpdate(id, putMoviesTransformers, {
            new: true,
        });
        if (!updateMoviesTransformers) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        return res.status(200).json(updateMoviesTransformers);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteMovieTransformers = async(req, res) => {
    try {
        const { id } = req.params;
        const deleteMovieTransformers = await MovieTransformers.findByIdAndDelete(id);
        if (!deleteMovieTransformers) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        return res.status(200).json(deleteMovieTransformers);
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {
    getMoviesTransformers,
    getOneMovieTransformers,
    postMovieTransformers,
    putMovieTransformers,
    deleteMovieTransformers,
};