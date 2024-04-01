const express = require('express');
const {
    getVideoGamesTransformers,
    getOneVideoGameTransformers,
    postVideoGameTransformers,
    putVideoGameTransformers,
    deleteVideoGameTransformers,
} = require('../../controllers/controllers.Transformers/videoGames.Transformers.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const VideoGamesTransformersRoutes = express.Router();

VideoGamesTransformersRoutes.get('/', getVideoGamesTransformers);
VideoGamesTransformersRoutes.get('/:id', getOneVideoGameTransformers);
VideoGamesTransformersRoutes.post('/post', [isAuth], upload.single('image'), postVideoGameTransformers);
VideoGamesTransformersRoutes.put('/edit/:id', upload.single('image'), [isAuth], putVideoGameTransformers);
VideoGamesTransformersRoutes.delete('/delete/:id', [isAuth], deleteVideoGameTransformers);

module.exports = VideoGamesTransformersRoutes;