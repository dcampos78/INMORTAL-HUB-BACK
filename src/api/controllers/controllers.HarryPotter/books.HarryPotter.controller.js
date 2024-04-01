const BooksHarryPotter = require('../../models/models.HarryPotter/books.HarryPotter.model');

const getBooksHarryPotter = async (req, res) => {
  try {
    const allBooksHarryPotter = await BooksHarryPotter.find();
    return res.status(200).json(allBooksHarryPotter);
  } catch (error) {
    return res.status(500).json(error);
  }
};


const getOneBookHarryPotter = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBookHarryPotter = await BooksHarryPotter.findById(id);
    return res.status(200).json(oneBookHarryPotter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postBookHarryPotter = async (req, res) => {
  try {
    const newBookHarryPotter = new BooksHarryPotter(req.body);
    const createdBookHarryPotter = await newBookHarryPotter.save();
    return res.status(201).json(createdBookHarryPotter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putBookHarryPotter = async (req, res) => {
  try {
    const { id } = req.params;
    const putBooksHarryPotter = new BooksHarryPotter(req.body);
    putvs._id = id;
    const updateBooksHarryPotter = await BooksHarryPotter.findByIdAndUpdate(id, putBooksHarryPotter, {
      new: true,
    });
    if (!updateBooksHarryPotter) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(updateBooksHarryPotter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBookHarryPotter = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBookHarryPotter = await BooksHarryPotter.findByIdAndDelete(id);
    if (!deleteBookHarryPotter) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(deleteBookHarryPotter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getBooksHarryPotter, getOneBookHarryPotter, postBookHarryPotter, putBookHarryPotter, deleteBookHarryPotter };
