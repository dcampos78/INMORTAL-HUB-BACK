const express = require('express');
const router = express.Router();
const uploadController = require('../avatar/uploadcontroller');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('avatar'), uploadController.uploadImage);

module.exports = router;
