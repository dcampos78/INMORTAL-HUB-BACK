const express = require('express');
const {
  getMoviesAlien,
  getOneMovieAlien,
  postMovieAlien,
  putMovieAlien,
  deleteMovieAlien,
} = require('../../controllers/controllers.Alien/movies.Alien.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const moviesAlienRoutes = express.Router();

moviesAlienRoutes.get('/', getMoviesAlien);
moviesAlienRoutes.get('/:id', getOneMovieAlien);
moviesAlienRoutes.post('/post', [isAuth], upload.single('image'), postMovieAlien);
moviesAlienRoutes.put('/edit/:id', upload.single('image'), [isAuth], putMovieAlien);
moviesAlienRoutes.delete('/delete/:id', [isAuth], deleteMovieAlien);

module.exports = moviesAlienRoutes;
