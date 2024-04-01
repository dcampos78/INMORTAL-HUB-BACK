const express = require('express');
const {
  getCharactersLordOfTheRings,
  getOneCharacterLordOfTheRings,
  postCharacterLordOfTheRings,
  putCharacterLordOfTheRings,
  deleteCharacterLordOfTheRings,
} = require('../../controllers/controllers.LordOfTheRings/characters.LordOfTheRings.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterLordOfTheRingsRoutes = express.Router();

characterLordOfTheRingsRoutes.get('/', getCharactersLordOfTheRings);
characterLordOfTheRingsRoutes.get('/:id', getOneCharacterLordOfTheRings);
characterLordOfTheRingsRoutes.post('/post', [isAuth], upload.single('image'), postCharacterLordOfTheRings);
characterLordOfTheRingsRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterLordOfTheRings);
characterLordOfTheRingsRoutes.delete('/delete/:id', [isAuth], deleteCharacterLordOfTheRings);

module.exports = characterLordOfTheRingsRoutes;
