const express = require('express');
const {
    getMoviesresidentEvil,
    getOneMovieresidentEvil,
    postMovieresidentEvil,
    putMovieresidentEvil,
    deleteMovieresidentEvil,
} = require('../../controllers/controllers.residentEvil/movies.residentEvil.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const moviesresidentEvilRoutes = express.Router();

moviesresidentEvilRoutes.get('/', getMoviesresidentEvil);
moviesresidentEvilRoutes.get('/:id', getOneMovieresidentEvil);
moviesresidentEvilRoutes.post('/post', [isAuth], upload.single('image'), postMovieresidentEvil);
moviesresidentEvilRoutes.put('/edit/:id', upload.single('image'), [isAuth], putMovieresidentEvil);
moviesresidentEvilRoutes.delete('/delete/:id', [isAuth], deleteMovieresidentEvil);

module.exports = moviesresidentEvilRoutes;