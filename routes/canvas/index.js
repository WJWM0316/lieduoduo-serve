var express = require('express');
var router = express.Router();
var rapidlyView = require('./rapidlyView')
var position = require('./position')
var resume = require('./resume')

router.use('/', rapidlyView)
router.use('/', position)
router.use('/', resume)

module.exports = router;