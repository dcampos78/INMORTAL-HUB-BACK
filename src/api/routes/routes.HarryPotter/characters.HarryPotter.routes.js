const express = require('express');
const {
  getCharactersHarryPotter,
  getOneCharacterHarryPotter,
  postCharacterHarryPotter,
  putCharacterHarryPotter,
  deleteCharacterHarryPotter,
} = require('../../controllers/controllers.HarryPotter/characters.HarryPotter.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterHarryPotterRoutes = express.Router();

characterHarryPotterRoutes.get('/', getCharactersHarryPotter);
characterHarryPotterRoutes.get('/:id', getOneCharacterHarryPotter);
characterHarryPotterRoutes.post('/post', [isAuth], upload.single('image'), postCharacterHarryPotter);
characterHarryPotterRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterHarryPotter);
characterHarryPotterRoutes.delete('/delete/:id', [isAuth], deleteCharacterHarryPotter);

module.exports = characterHarryPotterRoutes;
