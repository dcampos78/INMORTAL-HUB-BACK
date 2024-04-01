const express = require('express');
const {
  getBooksLordOfTheRings,
  getOneBookLordOfTheRings,
  postBookLordOfTheRings,
  putBookLordOfTheRings,
  deleteBookLordOfTheRings,
} = require('../../controllers/controllers.LordOfTheRings/books.LordOfTheRings.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const booksLordOfTheRingsRoutes = express.Router();

booksLordOfTheRingsRoutes.get('/', getBooksLordOfTheRings);
booksLordOfTheRingsRoutes.get('/:id', getOneBookLordOfTheRings);
booksLordOfTheRingsRoutes.post('/post', [isAuth], upload.single('image'), postBookLordOfTheRings);
booksLordOfTheRingsRoutes.put('/edit/:id', upload.single('image'), [isAuth], putBookLordOfTheRings);
booksLordOfTheRingsRoutes.delete('/delete/:id', [isAuth], deleteBookLordOfTheRings);

module.exports = booksLordOfTheRingsRoutes;
