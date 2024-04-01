const BooksIndianaJones = require('../../models/models.IndianaJones/books.IndianaJones.model');

const getBooksIndianaJones = async (req, res) => {
  try {
    const allBooksIndianaJones = await BooksIndianaJones.find();
    return res.status(200).json(allBooksIndianaJones);
  } catch (error) {
    return res.status(500).json(error);
  }
};


const getOneBookIndianaJones = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBookIndianaJones = await BooksIndianaJones.findById(id);
    return res.status(200).json(oneBookIndianaJones);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postBookIndianaJones = async (req, res) => {
  try {
    const newBookIndianaJones = new BooksIndianaJones(req.body);
    const createdBookIndianaJones = await newBookIndianaJones.save();
    return res.status(201).json(createdBookIndianaJones);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putBookIndianaJones = async (req, res) => {
  try {
    const { id } = req.params;
    const putBooksIndianaJones = new BooksIndianaJones(req.body);
    putvs._id = id;
    const updateBooksIndianaJones = await BooksIndianaJones.findByIdAndUpdate(id, putBooksIndianaJones, {
      new: true,
    });
    if (!updateBooksIndianaJones) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(updateBooksIndianaJones);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBookIndianaJones = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBookIndianaJones = await BooksIndianaJones.findByIdAndDelete(id);
    if (!deleteBookIndianaJones) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(deleteBookIndianaJones);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getBooksIndianaJones, getOneBookIndianaJones, postBookIndianaJones, putBookIndianaJones, deleteBookIndianaJones };
