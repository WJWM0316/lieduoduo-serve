var express = require('express');
var router = express.Router();
var pdf = require('./pdf')
var officegen = require('./officegen')

router.use('/', pdf)
router.use('/', officegen)


module.exports = router;