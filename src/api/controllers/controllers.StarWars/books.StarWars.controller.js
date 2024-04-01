const BooksStarWars = require('../../models/models.StarWars/books.StarWars.model');

const getBooksStarWars = async (req, res) => {
  try {
    const allBooksStarWars = await BooksStarWars.find();
    return res.status(200).json(allBooksStarWars);
  } catch (error) {
    return res.status(500).json(error);
  }
};


const getOneBookStarWars = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBookStarWars = await BooksStarWars.findById(id);
    return res.status(200).json(oneBookStarWars);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postBookStarWars = async (req, res) => {
  try {
    const newBookStarWars = new BooksStarWars(req.body);
    const createdBookStarWars = await newBookStarWars.save();
    return res.status(201).json(createdBookStarWars);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putBookStarWars = async (req, res) => {
  try {
    const { id } = req.params;
    const putBooksStarWars = new BooksStarWars(req.body);
    putvs._id = id;
    const updateBooksStarWars = await BooksStarWars.findByIdAndUpdate(id, putBooksStarWars, {
      new: true,
    });
    if (!updateBooksStarWars) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(updateBooksStarWars);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBookStarWars = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBookStarWars = await BooksStarWars.findByIdAndDelete(id);
    if (!deleteBookStarWars) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(deleteBookStarWars);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getBooksStarWars, getOneBookStarWars, postBookStarWars, putBookStarWars, deleteBookStarWars };
