const express = require('express');
const {
  getMoviesStarTrek,
  getOneMovieStarTrek,
  postMovieStarTrek,
  putMovieStarTrek,
  deleteMovieStarTrek,
} = require('../../controllers/controllers.StarTrek/movies.StarTrek.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const movieStarTrekRoutes = express.Router();

movieStarTrekRoutes.get('/', getMoviesStarTrek);
movieStarTrekRoutes.get('/:id', getOneMovieStarTrek);
movieStarTrekRoutes.post('/post', [isAuth], upload.single('image'), postMovieStarTrek);
movieStarTrekRoutes.put('/edit/:id', upload.single('image'), [isAuth], putMovieStarTrek);
movieStarTrekRoutes.delete('/delete/:id', [isAuth], deleteMovieStarTrek);

module.exports = movieStarTrekRoutes;
