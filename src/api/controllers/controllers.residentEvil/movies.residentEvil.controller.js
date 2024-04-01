const MovieresidentEvil = require('../../models/models.residentEvil/movies.residentEvil.model');

const getMoviesresidentEvil = async(req, res) => {
    try {
        const allMoviesresidentEvil = await MovieresidentEvil.find();
        return res.status(200).json(allMoviesresidentEvil);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getOneMovieresidentEvil = async(req, res) => {
    try {
        const { id } = req.params;
        const oneMovieresidentEvil = await MovieresidentEvil.findById(id);
        return res.status(200).json(oneMovieresidentEvil);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postMovieresidentEvil = async(req, res) => {
    try {
        const newMovieresidentEvil = new MovieresidentEvil(req.body);
        const createdMovieresidentEvil = await newMovieresidentEvil.save();
        return res.status(201).json(createdMovieresidentEvil);
    } catch (error) {
        s;
        return res.status(500).json(error);
    }
};

const putMovieresidentEvil = async(req, res) => {
    try {
        const { id } = req.params;
        const putMoviesresidentEvil = new MovieresidentEvil(req.body);
        putMoviesresidentEvil._id = id;
        const updateMoviesresidentEvil = await MovieresidentEvil.findByIdAndUpdate(id, putMoviesresidentEvil, {
            new: true,
        });
        if (!updateMoviesresidentEvil) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        return res.status(200).json(updateMoviesresidentEvil);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteMovieresidentEvil = async(req, res) => {
    try {
        const { id } = req.params;
        const deleteMovieresidentEvil = await MovieresidentEvil.findByIdAndDelete(id);
        if (!deleteMovieresidentEvil) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        return res.status(200).json(deleteMovieresidentEvil);
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {
    getMoviesresidentEvil,
    getOneMovieresidentEvil,
    postMovieresidentEvil,
    putMovieresidentEvil,
    deleteMovieresidentEvil,
};