var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index1', function(req, res, next) {
  res.sendFile('../views/index1.html');
});
module.exports = router;
