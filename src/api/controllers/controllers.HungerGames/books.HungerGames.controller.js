const BooksHungerGames = require('../../models/models.HungerGames/books.HungerGames.model');

const getBooksHungerGames = async (req, res) => {
  try {
    const allBooksHungerGames = await BooksHungerGames.find();
    return res.status(200).json(allBooksHungerGames);
  } catch (error) {
    return res.status(500).json(error);
  }
};


const getOneBookHungerGames = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBookHungerGames = await BooksHungerGames.findById(id);
    return res.status(200).json(oneBookHungerGames);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postBookHungerGames = async (req, res) => {
  try {
    const newBookHungerGames = new BooksHungerGames(req.body);
    const createdBookHungerGames = await newBookHungerGames.save();
    return res.status(201).json(createdBookHungerGames);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putBookHungerGames = async (req, res) => {
  try {
    const { id } = req.params;
    const putBooksHungerGames = new BooksHungerGames(req.body);
    putvs._id = id;
    const updateBooksHungerGames = await BooksHungerGames.findByIdAndUpdate(id, putBooksHungerGames, {
      new: true,
    });
    if (!updateBooksHungerGames) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(updateBooksHungerGames);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBookHungerGames = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBookHungerGames = await BooksHungerGames.findByIdAndDelete(id);
    if (!deleteBookHungerGames) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(deleteBookHungerGames);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getBooksHungerGames, getOneBookHungerGames, postBookHungerGames, putBookHungerGames, deleteBookHungerGames };
