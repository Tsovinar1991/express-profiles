const express = require('express');
const router = express.Router();

const news_validation = require('../validation/news_validation.js');
const save_news = require('../controller/news/savenews.js');
const read_news = require('../controller/news/readnews.js');
const read_new = require('../controller/news/readnew.js');

router.get('/', read_news);

router.get('/:id',read_new);

router.post('/', news_validation, save_news);

module.exports = router;