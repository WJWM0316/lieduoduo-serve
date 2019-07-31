var express = require('express');
var router = express.Router();
var request = require('request');

var httpRequest = require('../../config/httpRequest.js')
/* GET home page. */
router.get('/specialJob', function(req, res, next) {
	//let data = await httpRequest('qzApi', 'GET', '/position/list', {count: 20, page: 1})
	// console.log(JSON.parse(req.headers), 111)
	let headers = {}
	function titleCase(str) {
	  let strArr = str.split(' ');
	  for(let i=0;i<strArr.length;i++){
	    strArr[i] = strArr[i].substring(0,1).toUpperCase()+strArr[i].toLowerCase().substring(1)
	  } 
	  return strArr.join(' ');
	}  
	if (req.headers) {
		for (var i in req.headers) {
			headers[`${titleCase(i)}`] = req.headers[i]
		}
	}
	request({
			url: 'https://qiuzhi-api.lieduoduo.ziwork.com/position/list',
			method: 'GET',
			// headers: headers,
			form: {count: 20, page: 1}
		}, function (err, response, body) {
			var data = JSON.parse(body)
			//res.send([err, response, body])
			res.json(data)
			console.log(err, 111)
			console.log(response, 222)
			console.log(body, 333)
		})
  
});
module.exports = router;
