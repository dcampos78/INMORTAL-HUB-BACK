const express = require('express');
const {
  getVideoGamesTerminator,
  getOneVideoGameTerminator,
  postVideoGameTerminator,
  putVideoGameTerminator,
  deleteVideoGameTerminator,
} = require('../../controllers/controllers.Terminator/videoGames.Terminator.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const videoGamesTerminatorRoutes = express.Router();

videoGamesTerminatorRoutes.get('/', getVideoGamesTerminator);
videoGamesTerminatorRoutes.get('/:id', getOneVideoGameTerminator);
videoGamesTerminatorRoutes.post('/post', [isAuth], upload.single('image'), postVideoGameTerminator);
videoGamesTerminatorRoutes.put('/edit/:id', upload.single('image'), [isAuth], putVideoGameTerminator);
videoGamesTerminatorRoutes.delete('/delete/:id', [isAuth], deleteVideoGameTerminator);

module.exports = videoGamesTerminatorRoutes;
