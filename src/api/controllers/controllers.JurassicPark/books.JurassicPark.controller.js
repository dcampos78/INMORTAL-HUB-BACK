const BooksJurassicPark = require('../../models/models.JurassicPark/books.JurassicPark.model');

const getBooksJurassicPark = async (req, res) => {
  try {
    const allBooksJurassicPark = await BooksJurassicPark.find();
    return res.status(200).json(allBooksJurassicPark);
  } catch (error) {
    return res.status(500).json(error);
  }
};


const getOneBookJurassicPark = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBookJurassicPark = await BooksJurassicPark.findById(id);
    return res.status(200).json(oneBookJurassicPark);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postBookJurassicPark = async (req, res) => {
  try {
    const newBookJurassicPark = new BooksJurassicPark(req.body);
    const createdBookJurassicPark = await newBookJurassicPark.save();
    return res.status(201).json(createdBookJurassicPark);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putBookJurassicPark = async (req, res) => {
  try {
    const { id } = req.params;
    const putBooksJurassicPark = new BooksJurassicPark(req.body);
    putvs._id = id;
    const updateBooksJurassicPark = await BooksJurassicPark.findByIdAndUpdate(id, putBooksJurassicPark, {
      new: true,
    });
    if (!updateBooksJurassicPark) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(updateBooksJurassicPark);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBookJurassicPark = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBookJurassicPark = await BooksJurassicPark.findByIdAndDelete(id);
    if (!deleteBookJurassicPark) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(deleteBookJurassicPark);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getBooksJurassicPark, getOneBookJurassicPark, postBookJurassicPark, putBookJurassicPark, deleteBookJurassicPark };
