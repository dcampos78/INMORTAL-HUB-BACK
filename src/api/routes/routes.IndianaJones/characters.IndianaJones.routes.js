const express = require('express');
const {
  getCharactersIndianaJones,
  getOneCharacterIndianaJones,
  postCharacterIndianaJones,
  putCharacterIndianaJones,
  deleteCharacterIndianaJones,
} = require('../../controllers/controllers.IndianaJones/characters.IndianaJones.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterIndianaJonesRoutes = express.Router();

characterIndianaJonesRoutes.get('/', getCharactersIndianaJones);
characterIndianaJonesRoutes.get('/:id', getOneCharacterIndianaJones);
characterIndianaJonesRoutes.post('/post', [isAuth], upload.single('image'), postCharacterIndianaJones);
characterIndianaJonesRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterIndianaJones);
characterIndianaJonesRoutes.delete('/delete/:id', [isAuth], deleteCharacterIndianaJones);

module.exports = characterIndianaJonesRoutes;
