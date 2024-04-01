const express = require('express');
const {
    getMoviesXmen,
    getOneMovieXmen,
    postMovieXmen,
    putMovieXmen,
    deleteMovieXmen,
} = require('../../controllers/controllers.Xmen/movies.Xmen.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const moviesXmenRoutes = express.Router();

moviesXmenRoutes.get('/', getMoviesXmen);
moviesXmenRoutes.get('/:id', getOneMovieXmen);
moviesXmenRoutes.post('/post', [isAuth], upload.single('image'), postMovieXmen);
moviesXmenRoutes.put('/edit/:id', upload.single('image'), [isAuth], putMovieXmen);
moviesXmenRoutes.delete('/delete/:id', [isAuth], deleteMovieXmen);

module.exports = moviesXmenRoutes;