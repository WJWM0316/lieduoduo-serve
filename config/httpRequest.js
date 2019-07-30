var Global = require("./global"); //根据环境变量，获取对应的IP
var request = require('request');

function httpRequest(hostType, method, url, data) {
	var host = ''
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
			url,
			method,
			form: data
		}, function (err, response, body) {
			var data = JSON.parse(body)
			resolve(data);
		})
	})
}
module.exports = httpRequest;