const express = require('express');
const {
  getCharactersApesPlanet,
  getOneCharacterApesPlanet,
  postCharacterApesPlanet,
  putCharacterApesPlanet,
  deleteCharacterApesPlanet,
} = require('../../controllers/controllers.ApesPlanet/characters.ApesPlanet.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterApesPlanetRoutes = express.Router();

characterApesPlanetRoutes.get('/', getCharactersApesPlanet);
characterApesPlanetRoutes.get('/:id', getOneCharacterApesPlanet);
characterApesPlanetRoutes.post('/post', [isAuth], upload.single('image'), postCharacterApesPlanet);
characterApesPlanetRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterApesPlanet);
characterApesPlanetRoutes.delete('/delete/:id', [isAuth], deleteCharacterApesPlanet);

module.exports = characterApesPlanetRoutes;
