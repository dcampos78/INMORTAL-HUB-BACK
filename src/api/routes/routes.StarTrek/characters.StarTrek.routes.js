const express = require('express');
const {
  getCharactersStarTrek,
  getOneCharacterStarTrek,
  postCharacterStarTrek,
  putCharacterStarTrek,
  deleteCharacterStarTrek,
} = require('../../controllers/controllers.StarTrek/characters.StarTrek.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterStarTrekRoutes = express.Router();

characterStarTrekRoutes.get('/', getCharactersStarTrek);
characterStarTrekRoutes.get('/:id', getOneCharacterStarTrek);
characterStarTrekRoutes.post('/post', [isAuth], upload.single('image'), postCharacterStarTrek);
characterStarTrekRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterStarTrek);
characterStarTrekRoutes.delete('/delete/:id', [isAuth], deleteCharacterStarTrek);

module.exports = characterStarTrekRoutes;
