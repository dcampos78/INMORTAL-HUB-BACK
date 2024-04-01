const express = require('express');
const {
  getMoviesDune,
  getOneMovieDune,
  postMovieDune,
  putMovieDune,
  deleteMovieDune,
} = require('../../controllers/controllers.dune/movies.dune.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const movieDuneRoutes = express.Router();

movieDuneRoutes.get('/', getMoviesDune);
movieDuneRoutes.get('/:id', getOneMovieDune);
movieDuneRoutes.post('/post', [isAuth], upload.single('image'), postMovieDune);
movieDuneRoutes.put('/edit/:id', upload.single('image'), [isAuth], putMovieDune);
movieDuneRoutes.delete('/delete/:id', [isAuth], deleteMovieDune);

module.exports = movieDuneRoutes;
