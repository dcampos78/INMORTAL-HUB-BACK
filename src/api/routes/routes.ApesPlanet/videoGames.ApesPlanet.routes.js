const express = require('express');
const {
  getVideoGamesApesPlanet,
  getOneVideoGameApesPlanet,
  postVideoGameApesPlanet,
  putVideoGameApesPlanet,
  deleteVideoGameApesPlanet,
} = require('../../controllers/controllers.ApesPlanet/videoGames.ApesPlanet.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const videoGamesApesPlanetRoutes = express.Router();

videoGamesApesPlanetRoutes.get('/', getVideoGamesApesPlanet);
videoGamesApesPlanetRoutes.get('/:id', getOneVideoGameApesPlanet);
videoGamesApesPlanetRoutes.post('/post', [isAuth], upload.single('image'), postVideoGameApesPlanet);
videoGamesApesPlanetRoutes.put('/edit/:id', upload.single('image'), [isAuth], putVideoGameApesPlanet);
videoGamesApesPlanetRoutes.delete('/delete/:id', [isAuth], deleteVideoGameApesPlanet);

module.exports = videoGamesApesPlanetRoutes;
