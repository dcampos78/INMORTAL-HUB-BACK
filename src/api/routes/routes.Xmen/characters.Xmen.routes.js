const express = require('express');
const {
    getCharactersXmen,
    getOneCharacterXmen,
    postCharacterXmen,
    putCharacterXmen,
    deleteCharacterXmen,
} = require('../../controllers/controllers.Xmen/characters.Xmen.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterXmenRoutes = express.Router();

characterXmenRoutes.get('/', getCharactersXmen);
characterXmenRoutes.get('/:id', getOneCharacterXmen);
characterXmenRoutes.post('/post', [isAuth], upload.single('image'), postCharacterXmen);
characterXmenRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterXmen);
characterXmenRoutes.delete('/delete/:id', [isAuth], deleteCharacterXmen);

module.exports = characterXmenRoutes;