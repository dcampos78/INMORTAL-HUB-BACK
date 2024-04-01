const VideoGamesTransformers = require('../../models/models.Transformers/videoGames.Transformers.model');

const getVideoGamesTransformers = async(req, res) => {
    try {
        const allVideoGamesTransformers = await VideoGamesTransformers.find();
        return res.status(200).json(allVideoGamesTransformers);
    } catch (error) {
        return res.status(500).json(error);
    }
};


const getOneVideoGameTransformers = async(req, res) => {
    try {
        const { id } = req.params;
        const oneVideoGameTransformers = await VideoGamesTransformers.findById(id);
        return res.status(200).json(oneVideoGameTransformers);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postVideoGameTransformers = async(req, res) => {
    try {
        const newVideoGameTransformers = new VideoGamesTransformers(req.body);
        const createdVideoGameTransformers = await newVideoGameTransformers.save();
        return res.status(201).json(createdVideoGameTransformers);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const putVideoGameTransformers = async(req, res) => {
    try {
        const { id } = req.params;
        const putVideoGamesTransformers = new VideoGamesTransformers(req.body);
        putvs._id = id;
        const updateVideoGamesTransformers = await VideoGamesTransformers.findByIdAndUpdate(id, putVideoGamesTransformers, {
            new: true,
        });
        if (!updateVideoGamesTransformers) {
            return res.status(404).json({ message: 'VideoGame not found' });
        }
        return res.status(200).json(updateVideoGamesTransformers);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteVideoGameTransformers = async(req, res) => {
    try {
        const { id } = req.params;
        const deleteVideoGameTransformers = await VideoGamesTransformers.findByIdAndDelete(id);
        if (!deleteVideoGameTransformers) {
            return res.status(404).json({ message: 'VideoGame not found' });
        }
        return res.status(200).json(deleteVideoGameTransformers);
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = { getVideoGamesTransformers, getOneVideoGameTransformers, postVideoGameTransformers, putVideoGameTransformers, deleteVideoGameTransformers };