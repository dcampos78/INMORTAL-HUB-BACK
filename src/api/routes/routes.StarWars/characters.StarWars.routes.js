const express = require('express');
const {
  getCharactersStarWars,
  getOneCharacterStarWars,
  postCharacterStarWars,
  putCharacterStarWars,
  deleteCharacterStarWars,
} = require('../../controllers/controllers.StarWars/characters.StarWars.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterStarWarsRoutes = express.Router();

characterStarWarsRoutes.get('/', getCharactersStarWars);
characterStarWarsRoutes.get('/:id', getOneCharacterStarWars);
characterStarWarsRoutes.post('/post', [isAuth], upload.single('image'), postCharacterStarWars);
characterStarWarsRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterStarWars);
characterStarWarsRoutes.delete('/delete/:id', [isAuth], deleteCharacterStarWars);

module.exports = characterStarWarsRoutes;
