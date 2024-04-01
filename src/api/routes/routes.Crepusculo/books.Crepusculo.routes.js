const express = require('express');
const {
  getBooksCrepusculo,
  getOneBookCrepusculo,
  postBookCrepusculo,
  putBookCrepusculo,
  deleteBookCrepusculo,
} = require('../../controllers/controllers.Crepusculo/books.Crepusculo.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const booksCrepusculoRoutes = express.Router();

booksCrepusculoRoutes.get('/', getBooksCrepusculo);
booksCrepusculoRoutes.get('/:id', getOneBookCrepusculo);
booksCrepusculoRoutes.post('/post', [isAuth], upload.single('image'), postBookCrepusculo);
booksCrepusculoRoutes.put('/edit/:id', upload.single('image'), [isAuth], putBookCrepusculo);
booksCrepusculoRoutes.delete('/delete/:id', [isAuth], deleteBookCrepusculo);

module.exports = booksCrepusculoRoutes;
