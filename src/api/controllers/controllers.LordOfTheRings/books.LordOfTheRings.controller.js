const BooksLordOfTheRings = require('../../models/models.LordOfTheRings/books.LordOfTheRings.model');

const getBooksLordOfTheRings = async (req, res) => {
  try {
    const allBooksLordOfTheRings = await BooksLordOfTheRings.find();
    return res.status(200).json(allBooksLordOfTheRings);
  } catch (error) {
    return res.status(500).json(error);
  }
};


const getOneBookLordOfTheRings = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBookLordOfTheRings = await BooksLordOfTheRings.findById(id);
    return res.status(200).json(oneBookLordOfTheRings);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postBookLordOfTheRings = async (req, res) => {
  try {
    const newBookLordOfTheRings = new BooksLordOfTheRings(req.body);
    const createdBookLordOfTheRings = await newBookLordOfTheRings.save();
    return res.status(201).json(createdBookLordOfTheRings);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putBookLordOfTheRings = async (req, res) => {
  try {
    const { id } = req.params;
    const putBooksLordOfTheRings = new BooksLordOfTheRings(req.body);
    putvs._id = id;
    const updateBooksLordOfTheRings = await BooksLordOfTheRings.findByIdAndUpdate(id, putBooksLordOfTheRings, {
      new: true,
    });
    if (!updateBooksLordOfTheRings) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(updateBooksLordOfTheRings);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBookLordOfTheRings = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBookLordOfTheRings = await BooksLordOfTheRings.findByIdAndDelete(id);
    if (!deleteBookLordOfTheRings) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(deleteBookLordOfTheRings);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getBooksLordOfTheRings, getOneBookLordOfTheRings, postBookLordOfTheRings, putBookLordOfTheRings, deleteBookLordOfTheRings };
