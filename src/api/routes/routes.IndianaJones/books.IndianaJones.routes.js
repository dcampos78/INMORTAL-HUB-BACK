const express = require('express');
const {
  getBooksIndianaJones,
  getOneBookIndianaJones,
  postBookIndianaJones,
  putBookIndianaJones,
  deleteBookIndianaJones,
} = require('../../controllers/controllers.IndianaJones/books.IndianaJones.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const booksIndianaJonesRoutes = express.Router();

booksIndianaJonesRoutes.get('/', getBooksIndianaJones);
booksIndianaJonesRoutes.get('/:id', getOneBookIndianaJones);
booksIndianaJonesRoutes.post('/post', [isAuth], upload.single('image'), postBookIndianaJones);
booksIndianaJonesRoutes.put('/edit/:id', upload.single('image'), [isAuth], putBookIndianaJones);
booksIndianaJonesRoutes.delete('/delete/:id', [isAuth], deleteBookIndianaJones);

module.exports = booksIndianaJonesRoutes;
