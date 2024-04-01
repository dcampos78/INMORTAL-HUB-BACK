const express = require('express');
const {
  getMoviesBlade,
  getOneMovieBlade,
  postMovieBlade,
  putMovieBlade,
  deleteMovieBlade,
} = require('../../controllers/controllers.Blade/movies.Blade.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const movieBladeRoutes = express.Router();

movieBladeRoutes.get('/', getMoviesBlade);
movieBladeRoutes.get('/:id', getOneMovieBlade);
movieBladeRoutes.post('/post', [isAuth], upload.single('image'), postMovieBlade);
movieBladeRoutes.put('/edit/:id', upload.single('image'), [isAuth], putMovieBlade);
movieBladeRoutes.delete('/delete/:id', [isAuth], deleteMovieBlade);

module.exports = movieBladeRoutes;
