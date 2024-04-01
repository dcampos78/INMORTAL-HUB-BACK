const express = require('express');
const {
  getMoviesTerminator,
  getOneMovieTerminator,
  postMovieTerminator,
  putMovieTerminator,
  deleteMovieTerminator,
} = require('../../controllers/controllers.Terminator/movies.Terminator.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const movieTerminatorRoutes = express.Router();

movieTerminatorRoutes.get('/', getMoviesTerminator);
movieTerminatorRoutes.get('/:id', getOneMovieTerminator);
movieTerminatorRoutes.post('/post', [isAuth], upload.single('image'), postMovieTerminator);
movieTerminatorRoutes.put('/edit/:id', upload.single('image'), [isAuth], putMovieTerminator);
movieTerminatorRoutes.delete('/delete/:id', [isAuth], deleteMovieTerminator);

module.exports = movieTerminatorRoutes;
