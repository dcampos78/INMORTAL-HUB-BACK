const express = require('express');
const {
    getCharactersTransformers,
    getOneCharacterTransformers,
    postCharacterTransformers,
    putCharacterTransformers,
    deleteCharacterTransformers,
} = require('../../controllers/controllers.Transformers/characters.Transformers.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterTransformersRoutes = express.Router();

characterTransformersRoutes.get('/', getCharactersTransformers);
characterTransformersRoutes.get('/:id', getOneCharacterTransformers);
characterTransformersRoutes.post('/post', [isAuth], upload.single('image'), postCharacterTransformers);
characterTransformersRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterTransformers);
characterTransformersRoutes.delete('/delete/:id', [isAuth], deleteCharacterTransformers);

module.exports = characterTransformersRoutes;