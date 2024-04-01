const express = require('express');
const {
  getVideoGamesBlade,
  getOneVideoGameBlade,
  postVideoGameBlade,
  putVideoGameBlade,
  deleteVideoGameBlade,
} = require('../../controllers/controllers.Blade/videoGames.Blade.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const VideoGamesBladeRoutes = express.Router();

VideoGamesBladeRoutes.get('/', getVideoGamesBlade);
VideoGamesBladeRoutes.get('/:id', getOneVideoGameBlade);
VideoGamesBladeRoutes.post('/post', [isAuth], upload.single('image'), postVideoGameBlade);
VideoGamesBladeRoutes.put('/edit/:id', upload.single('image'), [isAuth], putVideoGameBlade);
VideoGamesBladeRoutes.delete('/delete/:id', [isAuth], deleteVideoGameBlade);

module.exports = VideoGamesBladeRoutes;
