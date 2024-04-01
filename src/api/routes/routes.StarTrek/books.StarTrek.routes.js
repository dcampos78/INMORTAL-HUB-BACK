const express = require('express');
const {
  getBooksStarTrek,
  getOneBookStarTrek,
  postBookStarTrek,
  putBookStarTrek,
  deleteBookStarTrek,
} = require('../../controllers/controllers.StarTrek/books.StarTrek.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const booksStarTrekRoutes = express.Router();

booksStarTrekRoutes.get('/', getBooksStarTrek);
booksStarTrekRoutes.get('/:id', getOneBookStarTrek);
booksStarTrekRoutes.post('/post', [isAuth], upload.single('image'), postBookStarTrek);
booksStarTrekRoutes.put('/edit/:id', upload.single('image'), [isAuth], putBookStarTrek);
booksStarTrekRoutes.delete('/delete/:id', [isAuth], deleteBookStarTrek);

module.exports = booksStarTrekRoutes;
