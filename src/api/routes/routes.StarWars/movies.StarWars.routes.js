const express = require('express');
const {
  getMoviesStarWars,
  getOneMovieStarWars,
  postMovieStarWars,
  putMovieStarWars,
  deleteMovieStarWars,
} = require('../../controllers/controllers.StarWars/movies.StarWars.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const moviesStarWarsRoutes = express.Router();

moviesStarWarsRoutes.get('/', getMoviesStarWars);
moviesStarWarsRoutes.get('/:id', getOneMovieStarWars);
moviesStarWarsRoutes.post('/post', [isAuth], upload.single('image'), postMovieStarWars);
moviesStarWarsRoutes.put('/edit/:id', upload.single('image'), [isAuth], putMovieStarWars);
moviesStarWarsRoutes.delete('/delete/:id', [isAuth], deleteMovieStarWars);

module.exports = moviesStarWarsRoutes;
