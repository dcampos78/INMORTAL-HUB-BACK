const express = require('express');
const {
  getCharactersCrepusculo,
  getOneCharacterCrepusculo,
  postCharacterCrepusculo,
  putCharacterCrepusculo,
  deleteCharacterCrepusculo,
} = require('../../controllers/controllers.Crepusculo/characters.Crepusculo.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterCrepusculoRoutes = express.Router();

characterCrepusculoRoutes.get('/', getCharactersCrepusculo);
characterCrepusculoRoutes.get('/:id', getOneCharacterCrepusculo);
characterCrepusculoRoutes.post('/post', [isAuth], upload.single('image'), postCharacterCrepusculo);
characterCrepusculoRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterCrepusculo);
characterCrepusculoRoutes.delete('/delete/:id', [isAuth], deleteCharacterCrepusculo);

module.exports = characterCrepusculoRoutes;
