const express = require('express');
const {
    getMoviesTransformers,
    getOneMovieTransformers,
    postMovieTransformers,
    putMovieTransformers,
    deleteMovieTransformers,
} = require('../../controllers/controllers.Transformers/movies.Transformers.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const moviesTransformersRoutes = express.Router();

moviesTransformersRoutes.get('/', getMoviesTransformers);
moviesTransformersRoutes.get('/:id', getOneMovieTransformers);
moviesTransformersRoutes.post('/post', [isAuth], upload.single('image'), postMovieTransformers);
moviesTransformersRoutes.put('/edit/:id', upload.single('image'), [isAuth], putMovieTransformers);
moviesTransformersRoutes.delete('/delete/:id', [isAuth], deleteMovieTransformers);

module.exports = moviesTransformersRoutes;