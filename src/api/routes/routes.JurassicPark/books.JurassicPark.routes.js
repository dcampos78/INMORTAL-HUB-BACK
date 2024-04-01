const express = require('express');
const {
  getBooksJurassicPark,
  getOneBookJurassicPark,
  postBookJurassicPark,
  putBookJurassicPark,
  deleteBookJurassicPark,
} = require('../../controllers/controllers.JurassicPark/books.JurassicPark.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const booksJurassicParkRoutes = express.Router();

booksJurassicParkRoutes.get('/', getBooksJurassicPark);
booksJurassicParkRoutes.get('/:id', getOneBookJurassicPark);
booksJurassicParkRoutes.post('/post', [isAuth], upload.single('image'), postBookJurassicPark);
booksJurassicParkRoutes.put('/edit/:id', upload.single('image'), [isAuth], putBookJurassicPark);
booksJurassicParkRoutes.delete('/delete/:id', [isAuth], deleteBookJurassicPark);

module.exports = booksJurassicParkRoutes;
