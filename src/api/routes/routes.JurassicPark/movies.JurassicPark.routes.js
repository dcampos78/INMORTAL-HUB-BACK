const express = require('express');
const {
  getMoviesJurassicPark,
  getOneMovieJurassicPark,
  postMovieJurassicPark,
  putMovieJurassicPark,
  deleteMovieJurassicPark,
} = require('../../controllers/controllers.JurassicPark/movies.JurassicPark.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const moviesJurassicParkRoutes = express.Router();

moviesJurassicParkRoutes.get('/', getMoviesJurassicPark);
moviesJurassicParkRoutes.get('/:id', getOneMovieJurassicPark);
moviesJurassicParkRoutes.post('/post', [isAuth], upload.single('image'), postMovieJurassicPark);
moviesJurassicParkRoutes.put('/edit/:id', upload.single('image'), [isAuth], putMovieJurassicPark);
moviesJurassicParkRoutes.delete('/delete/:id', [isAuth], deleteMovieJurassicPark);

module.exports = moviesJurassicParkRoutes;
