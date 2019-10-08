var express = require('express');
var router = express.Router();
var rapidlyView = require('./rapidlyView')
var position = require('./position')
var position_min = require('./position_min')
var resume = require('./resume')
var recruiter = require('./recruiter')
var wantYou = require('./wantYou')

router.use('/', rapidlyView)
router.use('/', position)
router.use('/', position_min)
router.use('/', resume)
router.use('/', recruiter)
router.use('/', wantYou)


module.exports = router;