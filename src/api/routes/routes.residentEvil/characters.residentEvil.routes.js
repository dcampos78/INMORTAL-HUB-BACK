const express = require('express');
const {
    getCharactersresidentEvil,
    getOneCharacterresidentEvil,
    postCharacterresidentEvil,
    putCharacterresidentEvil,
    deleteCharacterresidentEvil,
} = require('../../controllers/controllers.residentEvil/characters.residentEvil.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterresidentEvilRoutes = express.Router();

characterresidentEvilRoutes.get('/', getCharactersresidentEvil);
characterresidentEvilRoutes.get('/:id', getOneCharacterresidentEvil);
characterresidentEvilRoutes.post('/post', [isAuth], upload.single('image'), postCharacterresidentEvil);
characterresidentEvilRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterresidentEvil);
characterresidentEvilRoutes.delete('/delete/:id', [isAuth], deleteCharacterresidentEvil);

module.exports = characterresidentEvilRoutes;