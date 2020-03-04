const express = require('express');
const router = express.Router();
const CreatePng = require('./createPng')

router.use('/', CreatePng)


module.exports = router;