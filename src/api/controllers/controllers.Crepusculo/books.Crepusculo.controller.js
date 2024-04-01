const BooksCrepusculo = require('../../models/models.Crepusculo/books.Crepusculo.model');

const getBooksCrepusculo = async (req, res) => {
  try {
    const allBooksCrepusculo = await BooksCrepusculo.find();
    return res.status(200).json(allBooksCrepusculo);
  } catch (error) {
    return res.status(500).json(error);
  }
};


const getOneBookCrepusculo = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBookCrepusculo = await BooksCrepusculo.findById(id);
    return res.status(200).json(oneBookCrepusculo);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postBookCrepusculo = async (req, res) => {
  try {
    const newBookCrepusculo = new BooksCrepusculo(req.body);
    const createdBookCrepusculo = await newBookCrepusculo.save();
    return res.status(201).json(createdBookCrepusculo);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putBookCrepusculo = async (req, res) => {
  try {
    const { id } = req.params;
    const putBooksCrepusculo = new BooksCrepusculo(req.body);
    putvs._id = id;
    const updateBooksCrepusculo = await BooksCrepusculo.findByIdAndUpdate(id, putBooksCrepusculo, {
      new: true,
    });
    if (!updateBooksCrepusculo) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(updateBooksCrepusculo);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBookCrepusculo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBookCrepusculo = await BooksCrepusculo.findByIdAndDelete(id);
    if (!deleteBookCrepusculo) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(deleteBookCrepusculo);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getBooksCrepusculo, getOneBookCrepusculo, postBookCrepusculo, putBookCrepusculo, deleteBookCrepusculo };
