const BooksStarTrek = require('../../models/models.StarTrek/books.StarTrek.model');

const getBooksStarTrek = async (req, res) => {
  try {
    const allBooksStarTrek = await BooksStarTrek.find();
    return res.status(200).json(allBooksStarTrek);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneBookStarTrek = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBookStarTrek = await BooksStarTrek.findById(id);
    return res.status(200).json(oneBookStarTrek);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postBookStarTrek = async (req, res) => {
  try {
    const newBookStarTrek = new BooksStarTrek(req.body);
    const createdBookStarTrek = await newBookStarTrek.save();
    return res.status(201).json(createdBookStarTrek);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putBookStarTrek = async (req, res) => {
  try {
    const { id } = req.params;
    const putBooksStarTrek = new BooksStarTrek(req.body);
    putvs._id = id;
    const updateBooksStarTrek = await BooksStarTrek.findByIdAndUpdate(id, putBooksStarTrek, {
      new: true,
    });
    if (!updateBooksStarTrek) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(updateBooksStarTrek);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBookStarTrek = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBookStarTrek = await BooksStarTrek.findByIdAndDelete(id);
    if (!deleteBookStarTrek) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(deleteBookStarTrek);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getBooksStarTrek, getOneBookStarTrek, postBookStarTrek, putBookStarTrek, deleteBookStarTrek };
