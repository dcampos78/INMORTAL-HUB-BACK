const express = require('express');
const {
  getCharactersTerminator,
  getOneCharacterTerminator,
  postCharacterTerminator,
  putCharacterTerminator,
  deleteCharacterTerminator,
} = require('../../controllers/controllers.Terminator/characters.Terminator.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterTerminatorRoutes = express.Router();

characterTerminatorRoutes.get('/', getCharactersTerminator);
characterTerminatorRoutes.get('/:id', getOneCharacterTerminator);
characterTerminatorRoutes.post('/post', [isAuth], upload.single('image'), postCharacterTerminator);
characterTerminatorRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterTerminator);
characterTerminatorRoutes.delete('/delete/:id', [isAuth], deleteCharacterTerminator);

module.exports = characterTerminatorRoutes;
