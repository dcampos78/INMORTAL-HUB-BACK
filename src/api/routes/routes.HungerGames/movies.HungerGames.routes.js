const express = require('express');
const {
  getMoviesHungerGames,
  getOneMovieHungerGames,
  postMovieHungerGames,
  putMovieHungerGames,
  deleteMovieHungerGames,
} = require('../../controllers/controllers.HungerGames/movies.HungerGames.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const moviesHungerGamesRoutes = express.Router();

moviesHungerGamesRoutes.get('/', getMoviesHungerGames);
moviesHungerGamesRoutes.get('/:id', getOneMovieHungerGames);
moviesHungerGamesRoutes.post('/post', [isAuth], upload.single('image'), postMovieHungerGames);
moviesHungerGamesRoutes.put('/edit/:id', upload.single('image'), [isAuth], putMovieHungerGames);
moviesHungerGamesRoutes.delete('/delete/:id', [isAuth], deleteMovieHungerGames);

module.exports = moviesHungerGamesRoutes;
