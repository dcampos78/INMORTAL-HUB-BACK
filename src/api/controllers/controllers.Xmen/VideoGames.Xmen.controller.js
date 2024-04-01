const VideoGamesXmen = require('../../models/models.Xmen/videoGames.Xmen.model');

const getVideoGamesXmen = async(req, res) => {
    try {
        const allVideoGamesXmen = await VideoGamesXmen.find();
        return res.status(200).json(allVideoGamesXmen);
    } catch (error) {
        return res.status(500).json(error);
    }
};


const getOneVideoGameXmen = async(req, res) => {
    try {
        const { id } = req.params;
        const oneVideoGameXmen = await VideoGamesXmen.findById(id);
        return res.status(200).json(oneVideoGameXmen);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postVideoGameXmen = async(req, res) => {
    try {
        const newVideoGameXmen = new VideoGamesXmen(req.body);
        const createdVideoGameXmen = await newVideoGameXmen.save();
        return res.status(201).json(createdVideoGameXmen);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const putVideoGameXmen = async(req, res) => {
    try {
        const { id } = req.params;
        const putVideoGamesXmen = new VideoGamesXmen(req.body);
        putvs._id = id;
        const updateVideoGamesXmen = await VideoGamesXmen.findByIdAndUpdate(id, putVideoGamesXmen, {
            new: true,
        });
        if (!updateVideoGamesXmen) {
            return res.status(404).json({ message: 'VideoGame not found' });
        }
        return res.status(200).json(updateVideoGamesXmen);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteVideoGameXmen = async(req, res) => {
    try {
        const { id } = req.params;
        const deleteVideoGameXmen = await VideoGamesXmen.findByIdAndDelete(id);
        if (!deleteVideoGameXmen) {
            return res.status(404).json({ message: 'VideoGame not found' });
        }
        return res.status(200).json(deleteVideoGameXmen);
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = { getVideoGamesXmen, getOneVideoGameXmen, postVideoGameXmen, putVideoGameXmen, deleteVideoGameXmen };