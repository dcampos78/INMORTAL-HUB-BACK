const express = require('express');
const {
  getCharactersJurassicPark,
  getOneCharacterJurassicPark,
  postCharacterJurassicPark,
  putCharacterJurassicPark,
  deleteCharacterJurassicPark,
} = require('../../controllers/controllers.JurassicPark/characters.JurassicPark.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterJurassicParkRoutes = express.Router();

characterJurassicParkRoutes.get('/', getCharactersJurassicPark);
characterJurassicParkRoutes.get('/:id', getOneCharacterJurassicPark);
characterJurassicParkRoutes.post('/post', [isAuth], upload.single('image'), postCharacterJurassicPark);
characterJurassicParkRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterJurassicPark);
characterJurassicParkRoutes.delete('/delete/:id', [isAuth], deleteCharacterJurassicPark);

module.exports = characterJurassicParkRoutes;
