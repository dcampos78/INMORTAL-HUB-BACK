const express = require('express');
const {
    getVideoGamesresidentEvil,
    getOneVideoGameresidentEvil,
    postVideoGameresidentEvil,
    putVideoGameresidentEvil,
    deleteVideoGameresidentEvil,
} = require('../../controllers/controllers.residentEvil/videoGames.residentEvil.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const VideoGamesresidentEvilRoutes = express.Router();

VideoGamesresidentEvilRoutes.get('/', getVideoGamesresidentEvil);
VideoGamesresidentEvilRoutes.get('/:id', getOneVideoGameresidentEvil);
VideoGamesresidentEvilRoutes.post('/post', [isAuth], upload.single('image'), postVideoGameresidentEvil);
VideoGamesresidentEvilRoutes.put('/edit/:id', upload.single('image'), [isAuth], putVideoGameresidentEvil);
VideoGamesresidentEvilRoutes.delete('/delete/:id', [isAuth], deleteVideoGameresidentEvil);

module.exports = VideoGamesresidentEvilRoutes;