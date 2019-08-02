var Global = require("./global"); //根据环境变量，获取对应的IP
var request = require('request');

function httpRequest({hostType, method, url, data, req, res, next}) {
	var host = ''
	let headers = req.headers
	delete headers.host
	delete headers.Host
	switch (hostType) {
		case 'qzApi':
			host = Global.qzApi
			break
		case 'zpApi':
			host = Global.zpApi
			break
		case 'pubApi':
			host = Global.pubApi
			break
	}
	var requestUrl = host + url;
	return new Promise(function (resolve, reject) {
		request({
			url: requestUrl,
			method,
			headers,
			form: data
		}, function (err, response, body) {
			if (!err && response) {
				var data = JSON.parse(body)
				resolve(data);
			} else {
				res.send([err, response, body, '兄嘚接口報錯了'])
			}			
		})
	})
}
module.exports = httpRequest;