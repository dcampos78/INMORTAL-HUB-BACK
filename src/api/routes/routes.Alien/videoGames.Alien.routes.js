const express = require('express');
const {
  getVideoGamesAlien,
  getOneVideoGameAlien,
  postVideoGameAlien,
  putVideoGameAlien,
  deleteVideoGameAlien,
} = require('../../controllers/controllers.Alien/videoGames.Alien.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const VideoGamesAlienRoutes = express.Router();

VideoGamesAlienRoutes.get('/', getVideoGamesAlien);
VideoGamesAlienRoutes.get('/:id', getOneVideoGameAlien);
VideoGamesAlienRoutes.post('/post', [isAuth], upload.single('image'), postVideoGameAlien);
VideoGamesAlienRoutes.put('/edit/:id', upload.single('image'), [isAuth], putVideoGameAlien);
VideoGamesAlienRoutes.delete('/delete/:id', [isAuth], deleteVideoGameAlien);

module.exports = VideoGamesAlienRoutes;
