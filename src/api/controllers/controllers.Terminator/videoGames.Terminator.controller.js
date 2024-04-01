const VideoGamesTerminator = require('../../models/models.Terminator/videoGames.Terminator.model');

const getVideoGamesTerminator = async (req, res) => {
  try {
    const allVideoGamesTerminator = await VideoGamesTerminator.find();
    return res.status(200).json(allVideoGamesTerminator);
  } catch (error) {
    return res.status(500).json(error);
  }
};


const getOneVideoGameTerminator = async (req, res) => {
  try {
    const { id } = req.params;
    const oneVideoGameTerminator = await VideoGamesTerminator.findById(id);
    return res.status(200).json(oneVideoGameTerminator);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postVideoGameTerminator = async (req, res) => {
  try {
    const newVideoGameTerminator = new VideoGamesTerminator(req.body);
    const createdVideoGameTerminator = await newVideoGameTerminator.save();
    return res.status(201).json(createdVideoGameTerminator);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putVideoGameTerminator = async (req, res) => {
  try {
    const { id } = req.params;
    const putVideoGamesTerminator = new VideoGamesTerminator(req.body);
    putvs._id = id;
    const updateVideoGamesTerminator = await VideoGamesTerminator.findByIdAndUpdate(id, putVideoGamesTerminator, {
      new: true,
    });
    if (!updateVideoGamesTerminator) {
      return res.status(404).json({ message: 'VideoGame not found' });
    }
    return res.status(200).json(updateVideoGamesTerminator);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteVideoGameTerminator = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteVideoGameTerminator = await VideoGamesTerminator.findByIdAndDelete(id);
    if (!deleteVideoGameTerminator) {
      return res.status(404).json({ message: 'VideoGame not found' });
    }
    return res.status(200).json(deleteVideoGameTerminator);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getVideoGamesTerminator, getOneVideoGameTerminator, postVideoGameTerminator, putVideoGameTerminator, deleteVideoGameTerminator };
