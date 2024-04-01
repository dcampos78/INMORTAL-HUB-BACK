const express = require('express');
const {
  getBooksStarWars,
  getOneBookStarWars,
  postBookStarWars,
  putBookStarWars,
  deleteBookStarWars,
} = require('../../controllers/controllers.StarWars/books.StarWars.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const booksStarWarsRoutes = express.Router();

booksStarWarsRoutes.get('/', getBooksStarWars);
booksStarWarsRoutes.get('/:id', getOneBookStarWars);
booksStarWarsRoutes.post('/post', [isAuth], upload.single('image'), postBookStarWars);
booksStarWarsRoutes.put('/edit/:id', upload.single('image'), [isAuth], putBookStarWars);
booksStarWarsRoutes.delete('/delete/:id', [isAuth], deleteBookStarWars);

module.exports = booksStarWarsRoutes;
