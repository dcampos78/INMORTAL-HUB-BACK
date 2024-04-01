const express = require('express');
const {
  getBooksHarryPotter,
  getOneBookHarryPotter,
  postBookHarryPotter,
  putBookHarryPotter,
  deleteBookHarryPotter,
} = require('../../controllers/controllers.HarryPotter/books.HarryPotter.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const booksHarryPotterRoutes = express.Router();

booksHarryPotterRoutes.get('/', getBooksHarryPotter);
booksHarryPotterRoutes.get('/:id', getOneBookHarryPotter);
booksHarryPotterRoutes.post('/post', [isAuth], upload.single('image'), postBookHarryPotter);
booksHarryPotterRoutes.put('/edit/:id', upload.single('image'), [isAuth], putBookHarryPotter);
booksHarryPotterRoutes.delete('/delete/:id', [isAuth], deleteBookHarryPotter);

module.exports = booksHarryPotterRoutes;
