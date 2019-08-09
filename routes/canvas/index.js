var express = require('express');
var router = express.Router();
var rapidlyView = require('./rapidlyView')
var position = require('./position')

router.use('/', rapidlyView)
router.use('/', position)

module.exports = router;