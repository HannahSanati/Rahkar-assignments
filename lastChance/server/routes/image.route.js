const express = require('express');
const { getTestData } = require('../cotrollers/image.controller');

const router = express.Router()

router.post('/image',getTestData );

module.exports = router
