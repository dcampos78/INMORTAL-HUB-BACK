const express = require('express');
const {
  getCharactersAlien,
  getOneCharacterAlien,
  postCharacterAlien,
  putCharacterAlien,
  deleteCharacterAlien,
} = require('../../controllers/controllers.Alien/characters.Alien.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterAlienRoutes = express.Router();

characterAlienRoutes.get('/', getCharactersAlien);
characterAlienRoutes.get('/:id', getOneCharacterAlien);
characterAlienRoutes.post('/post', [isAuth], upload.single('image'), postCharacterAlien);
characterAlienRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterAlien);
characterAlienRoutes.delete('/delete/:id', [isAuth], deleteCharacterAlien);

module.exports = characterAlienRoutes;
