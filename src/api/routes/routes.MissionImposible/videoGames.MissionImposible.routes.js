const express = require('express');
const {
  getVideoGamesMissionImposible,
  postVideoGameMissionImposible,
  putVideoGameMissionImposible,
  deleteVideoGameMissionImposible,
  getOneVideoGameMissionImposible,
} = require('../../controllers/controllers.MissionImposible/videoGames.MissionImposible.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const videoGamesMissionImposibleRoutes = express.Router();

videoGamesMissionImposibleRoutes.get('/', getVideoGamesMissionImposible);
videoGamesMissionImposibleRoutes.get('/:id', getOneVideoGameMissionImposible);
videoGamesMissionImposibleRoutes.post('/post', [isAuth], upload.single('image'), postVideoGameMissionImposible);
videoGamesMissionImposibleRoutes.put('/edit/:id', upload.single('image'), [isAuth], putVideoGameMissionImposible);
videoGamesMissionImposibleRoutes.delete('/delete/:id', [isAuth], deleteVideoGameMissionImposible);

module.exports = videoGamesMissionImposibleRoutes;
