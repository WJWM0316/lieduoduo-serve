var express = require('express');
var router = express.Router();
var path = require('path');
var {createCanvas, loadImage} = require('canvas');



var httpRequest = require('../../config/httpRequest.js')
var pocessor = require('../../utils/canvasPocessor.js')

router.get('/poster/rapidlyViwe', async function(req, res, next) {
	let data = await httpRequest({
		hostType: 'qzApi', 
		method: 'GET', 
		url: '/surface/rapidly', 
		data: req.query, 
		req,
		res,
		next
	})

	const canvas = createCanvas(750, 1334);
	const ctx = canvas.getContext('2d');
	const bgSrc = path.join(__dirname, 'public/images/specialJobBg.png');
	loadImage(bgSrc).then((image) => {
		ctx.drawImage(image, 0, 0, 750, 1334);
	})
})


module.exports = router;
