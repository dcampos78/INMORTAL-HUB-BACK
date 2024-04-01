const express = require('express');
const {
  getCharactersMissionImposible,
  getOneCharacterMissionImposible,
  postCharacterMissionImposible,
  putCharacterMissionImposible,
  deleteCharacterMissionImposible,
} = require('../../controllers/controllers.MissionImposible/characters.MissionImposible.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterMissionImposibleRoutes = express.Router();

characterMissionImposibleRoutes.get('/', getCharactersMissionImposible);
characterMissionImposibleRoutes.get('/:id', getOneCharacterMissionImposible);
characterMissionImposibleRoutes.post('/post', [isAuth], upload.single('image'), postCharacterMissionImposible);
characterMissionImposibleRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterMissionImposible);
characterMissionImposibleRoutes.delete('/delete/:id', [isAuth], deleteCharacterMissionImposible);

module.exports = characterMissionImposibleRoutes;
