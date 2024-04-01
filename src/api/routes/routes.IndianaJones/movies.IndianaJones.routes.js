const express = require('express');
const {
  getMoviesIndianaJones,
  getOneMovieIndianaJones,
  postMovieIndianaJones,
  putMovieIndianaJones,
  deleteMovieIndianaJones,
} = require('../../controllers/controllers.IndianaJones/movies.IndianaJones.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const moviesIndianaJonesRoutes = express.Router();

moviesIndianaJonesRoutes.get('/', getMoviesIndianaJones);
moviesIndianaJonesRoutes.get('/:id', getOneMovieIndianaJones);
moviesIndianaJonesRoutes.post('/post', [isAuth], upload.single('image'), postMovieIndianaJones);
moviesIndianaJonesRoutes.put('/edit/:id', upload.single('image'), [isAuth], putMovieIndianaJones);
moviesIndianaJonesRoutes.delete('/delete/:id', [isAuth], deleteMovieIndianaJones);

module.exports = moviesIndianaJonesRoutes;
