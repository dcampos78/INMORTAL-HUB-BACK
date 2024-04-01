const express = require('express');
const {
  getMoviesMissionImposible,
  getOneMovieMissionImposible,
  postMovieMissionImposible,
  putMovieMissionImposible,
  deleteMovieMissionImposible,
} = require('../../controllers/controllers.MissionImposible/movies.MissionImposible.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const movieMissionImposibleRoutes = express.Router();

movieMissionImposibleRoutes.get('/', getMoviesMissionImposible);
movieMissionImposibleRoutes.get('/:id', getOneMovieMissionImposible);
movieMissionImposibleRoutes.post('/post', [isAuth], upload.single('image'), postMovieMissionImposible);
movieMissionImposibleRoutes.put('/edit/:id', upload.single('image'), [isAuth], putMovieMissionImposible);
movieMissionImposibleRoutes.delete('/delete/:id', [isAuth], deleteMovieMissionImposible);

module.exports = movieMissionImposibleRoutes;
