const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articles');
const uploadImage = require('../middlewares/uploadImage');

router.post('/', uploadImage.single('image'), articleController.createArticle);

module.exports = router;