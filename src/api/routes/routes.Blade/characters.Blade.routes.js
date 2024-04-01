const express = require('express');
const {
  getCharactersBlade,
  getOneCharacterBlade,
  postCharacterBlade,
  putCharacterBlade,
  deleteCharacterBlade,
} = require('../../controllers/controllers.Blade/characters.Blade.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterBladeRoutes = express.Router();

characterBladeRoutes.get('/', getCharactersBlade);
characterBladeRoutes.get('/:id', getOneCharacterBlade);
characterBladeRoutes.post('/post', [isAuth], upload.single('image'), postCharacterBlade);
characterBladeRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterBlade);
characterBladeRoutes.delete('/delete/:id', [isAuth], deleteCharacterBlade);

module.exports = characterBladeRoutes;
