const MovieXmen = require('../../models/models.Xmen/movies.Xmen.model');

const getMoviesXmen = async(req, res) => {
    try {
        const allMoviesXmen = await MovieXmen.find();
        return res.status(200).json(allMoviesXmen);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getOneMovieXmen = async(req, res) => {
    try {
        const { id } = req.params;
        const oneMovieXmen = await MovieXmen.findById(id);
        return res.status(200).json(oneMovieXmen);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postMovieXmen = async(req, res) => {
    try {
        const newMovieXmen = new MovieXmen(req.body);
        const createdMovieXmen = await newMovieXmen.save();
        return res.status(201).json(createdMovieXmen);
    } catch (error) {
        s;
        return res.status(500).json(error);
    }
};

const putMovieXmen = async(req, res) => {
    try {
        const { id } = req.params;
        const putMoviesXmen = new MovieXmen(req.body);
        putMoviesXmen._id = id;
        const updateMoviesXmen = await MovieXmen.findByIdAndUpdate(id, putMoviesXmen, {
            new: true,
        });
        if (!updateMoviesXmen) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        return res.status(200).json(updateMoviesXmen);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteMovieXmen = async(req, res) => {
    try {
        const { id } = req.params;
        const deleteMovieXmen = await MovieXmen.findByIdAndDelete(id);
        if (!deleteMovieXmen) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        return res.status(200).json(deleteMovieXmen);
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {
    getMoviesXmen,
    getOneMovieXmen,
    postMovieXmen,
    putMovieXmen,
    deleteMovieXmen,
};