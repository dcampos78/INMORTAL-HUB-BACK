const express = require('express');
const {
  getMoviesApesPlanet,
  getOneMovieApesPlanet,
  postMovieApesPlanet,
  putMovieApesPlanet,
  deleteMovieApesPlanet,
} = require('../../controllers/controllers.ApesPlanet/movies.ApesPlanet.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const movieApesPlanetRoutes = express.Router();

movieApesPlanetRoutes.get('/', getMoviesApesPlanet);
movieApesPlanetRoutes.get('/:id', getOneMovieApesPlanet);
movieApesPlanetRoutes.post('/post', [isAuth], upload.single('image'), postMovieApesPlanet);
movieApesPlanetRoutes.put('/edit/:id', upload.single('image'), [isAuth], putMovieApesPlanet);
movieApesPlanetRoutes.delete('/delete/:id', [isAuth], deleteMovieApesPlanet);

module.exports = movieApesPlanetRoutes;
