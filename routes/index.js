var express = require('express');
var router = express.Router();
const request = require('request');
/* GET home page. */
router.get('/index', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendfile('./views/index.html')
});
router.get('/index1', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendfile('./views/index1.html')
});

router.get('/getuser', function(req, res) {
  let url = 'https://admin-api.lieduoduo.com/label/field'
  request(url, function (error, response, body) {
  	if (!error && response.statusCode == 200) {
      console.log(response.body);
			let data = JSON.parse(response.body);
			res.json(data);
		} else {
			let data = JSON.parse(response.body);
			res.json(data)
		}
  })
});

module.exports = router;


