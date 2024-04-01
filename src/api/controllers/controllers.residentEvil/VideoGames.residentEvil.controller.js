const VideoGamesresidentEvil = require('../../models/models.residentEvil/videoGames.residentEvil.model');

const getVideoGamesresidentEvil = async(req, res) => {
    try {
        const allVideoGamesresidentEvil = await VideoGamesresidentEvil.find();
        return res.status(200).json(allVideoGamesresidentEvil);
    } catch (error) {
        return res.status(500).json(error);
    }
};


const getOneVideoGameresidentEvil = async(req, res) => {
    try {
        const { id } = req.params;
        const oneVideoGameresidentEvil = await VideoGamesresidentEvil.findById(id);
        return res.status(200).json(oneVideoGameresidentEvil);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postVideoGameresidentEvil = async(req, res) => {
    try {
        const newVideoGameresidentEvil = new VideoGamesresidentEvil(req.body);
        const createdVideoGameresidentEvil = await newVideoGameresidentEvil.save();
        return res.status(201).json(createdVideoGameresidentEvil);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const putVideoGameresidentEvil = async(req, res) => {
    try {
        const { id } = req.params;
        const putVideoGamesresidentEvil = new VideoGamesresidentEvil(req.body);
        putvs._id = id;
        const updateVideoGamesresidentEvil = await VideoGamesresidentEvil.findByIdAndUpdate(id, putVideoGamesresidentEvil, {
            new: true,
        });
        if (!updateVideoGamesresidentEvil) {
            return res.status(404).json({ message: 'VideoGame not found' });
        }
        return res.status(200).json(updateVideoGamesresidentEvil);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteVideoGameresidentEvil = async(req, res) => {
    try {
        const { id } = req.params;
        const deleteVideoGameresidentEvil = await VideoGamesresidentEvil.findByIdAndDelete(id);
        if (!deleteVideoGameresidentEvil) {
            return res.status(404).json({ message: 'VideoGame not found' });
        }
        return res.status(200).json(deleteVideoGameresidentEvil);
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = { getVideoGamesresidentEvil, getOneVideoGameresidentEvil, postVideoGameresidentEvil, putVideoGameresidentEvil, deleteVideoGameresidentEvil };