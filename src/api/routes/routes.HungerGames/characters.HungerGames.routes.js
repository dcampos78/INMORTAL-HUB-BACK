const express = require('express');
const {
  getCharactersHungerGames,
  getOneCharacterHungerGames,
  postCharacterHungerGames,
  putCharacterHungerGames,
  deleteCharacterHungerGames,
} = require('../../controllers/controllers.HungerGames/characters.HungerGames.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterHungerGamesRoutes = express.Router();

characterHungerGamesRoutes.get('/', getCharactersHungerGames);
characterHungerGamesRoutes.get('/:id', getOneCharacterHungerGames);
characterHungerGamesRoutes.post('/post', [isAuth], upload.single('image'), postCharacterHungerGames);
characterHungerGamesRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterHungerGames);
characterHungerGamesRoutes.delete('/delete/:id', [isAuth], deleteCharacterHungerGames);

module.exports = characterHungerGamesRoutes;
