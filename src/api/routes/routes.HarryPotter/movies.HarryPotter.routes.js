const express = require('express');
const {
  getMoviesHarryPotter,
  getOneMovieHarryPotter,
  postMovieHarryPotter,
  putMovieHarryPotter,
  deleteMovieHarryPotter,
} = require('../../controllers/controllers.HarryPotter/movies.HarryPotter.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const moviesHarryPotterRoutes = express.Router();

moviesHarryPotterRoutes.get('/', getMoviesHarryPotter);
moviesHarryPotterRoutes.get('/:id', getOneMovieHarryPotter);
moviesHarryPotterRoutes.post('/post', [isAuth], upload.single('image'), postMovieHarryPotter);
moviesHarryPotterRoutes.put('/edit/:id', upload.single('image'), [isAuth], putMovieHarryPotter);
moviesHarryPotterRoutes.delete('/delete/:id', [isAuth], deleteMovieHarryPotter);

module.exports = moviesHarryPotterRoutes;
