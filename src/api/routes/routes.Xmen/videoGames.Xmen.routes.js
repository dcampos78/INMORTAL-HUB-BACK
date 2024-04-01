const express = require('express');
const {
    getVideoGamesXmen,
    getOneVideoGameXmen,
    postVideoGameXmen,
    putVideoGameXmen,
    deleteVideoGameXmen,
} = require('../../controllers/controllers.Xmen/videoGames.Xmen.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const VideoGamesXmenRoutes = express.Router();

VideoGamesXmenRoutes.get('/', getVideoGamesXmen);
VideoGamesXmenRoutes.get('/:id', getOneVideoGameXmen);
VideoGamesXmenRoutes.post('/post', [isAuth], upload.single('image'), postVideoGameXmen);
VideoGamesXmenRoutes.put('/edit/:id', upload.single('image'), [isAuth], putVideoGameXmen);
VideoGamesXmenRoutes.delete('/delete/:id', [isAuth], deleteVideoGameXmen);

module.exports = VideoGamesXmenRoutes;