const express = require('express');
const {
  getBooksHungerGames,
  getOneBookHungerGames,
  postBookHungerGames,
  putBookHungerGames,
  deleteBookHungerGames,
} = require('../../controllers/controllers.HungerGames/books.HungerGames.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const booksHungerGamesRoutes = express.Router();

booksHungerGamesRoutes.get('/', getBooksHungerGames);
booksHungerGamesRoutes.get('/:id', getOneBookHungerGames);
booksHungerGamesRoutes.post('/post', [isAuth], upload.single('image'), postBookHungerGames);
booksHungerGamesRoutes.put('/edit/:id', upload.single('image'), [isAuth], putBookHungerGames);
booksHungerGamesRoutes.delete('/delete/:id', [isAuth], deleteBookHungerGames);

module.exports = booksHungerGamesRoutes;
