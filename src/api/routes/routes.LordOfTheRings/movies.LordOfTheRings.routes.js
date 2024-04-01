const express = require('express');
const {
  getMoviesLordOfTheRings,
  getOneMovieLordOfTheRings,
  postMovieLordOfTheRings,
  putMovieLordOfTheRings,
  deleteMovieLordOfTheRings,
} = require('../../controllers/controllers.LordOfTheRings/movies.LordOfTheRings.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const moviesLordOfTheRingsRoutes = express.Router();

moviesLordOfTheRingsRoutes.get('/', getMoviesLordOfTheRings);
moviesLordOfTheRingsRoutes.get('/:id', getOneMovieLordOfTheRings);
moviesLordOfTheRingsRoutes.post('/post', [isAuth], upload.single('image'), postMovieLordOfTheRings);
moviesLordOfTheRingsRoutes.put('/edit/:id', upload.single('image'), [isAuth], putMovieLordOfTheRings);
moviesLordOfTheRingsRoutes.delete('/delete/:id', [isAuth], deleteMovieLordOfTheRings);

module.exports = moviesLordOfTheRingsRoutes;
