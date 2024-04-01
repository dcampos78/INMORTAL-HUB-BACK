const express = require('express');
const {
  getMoviesCrepusculo,
  getOneMovieCrepusculo,
  postMovieCrepusculo,
  putMovieCrepusculo,
  deleteMovieCrepusculo,
} = require('../../controllers/controllers.Crepusculo/movies.Crepusculo.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const moviesCrepusculoRoutes = express.Router();

moviesCrepusculoRoutes.get('/', getMoviesCrepusculo);
moviesCrepusculoRoutes.get('/:id', getOneMovieCrepusculo);
moviesCrepusculoRoutes.post('/post', [isAuth], upload.single('image'), postMovieCrepusculo);
moviesCrepusculoRoutes.put('/edit/:id', upload.single('image'), [isAuth], putMovieCrepusculo);
moviesCrepusculoRoutes.delete('/delete/:id', [isAuth], deleteMovieCrepusculo);

module.exports = moviesCrepusculoRoutes;
