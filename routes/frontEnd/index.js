var express = require('express');
var router = express.Router();
var request = require('request');

var httpRequest = require('../../config/httpRequest.js')
/* GET home page. */
router.get('/specialJob', function(req, res, next) {
	//let data = await httpRequest('qzApi', 'GET', '/position/list', {count: 20, page: 1})
	console.log(res.headersSent); // false
  res.send('OK');
  console.log(res.headersSent); // true
	res.json('測試111');
	// request({
	// 		url: 'https://qiuzhi-api.lieduoduo.ziwork.com/position/list',
	// 		method: 'GET',
	// 		header: {
 //        'Authorization': '36b9e88fcb44bdb25602f67fbe35487b'
 //      }, 
	// 		form: {count: 20, page: 1}
	// 	}, function (err, response, body) {
	// 		var data = JSON.parse(body)
	// 		res.json(data);
	// 	})
  
});
module.exports = router;
