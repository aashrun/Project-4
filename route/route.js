const express = require('express');
const router = express.Router();

const shortUrlController = require('../controller/ShortURL')


router.post('/url/shorten', shortUrlController.shortUrl)

module.exports= router;