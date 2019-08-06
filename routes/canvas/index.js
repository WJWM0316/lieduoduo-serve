var express = require('express');
var router = express.Router();
var path = require('path');
var {createCanvas, loadImage} = require('canvas');



var httpRequest = require('../../config/httpRequest.js')
var pocessor = require('../../utils/canvasPocessor.js')

router.get('/rapidlyViwe', async function(req, res, next) {
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
	loadImage('https://pics5.baidu.com/feed/32fa828ba61ea8d39a420a0a54450d4b251f5834.jpeg?token=c005bc1a28f55f9caf030f47a8215d75&s=71331CD75E1327CC7F88BCAE03001009').then((image) => {
		ctx.drawImage(image, 0, 0, 750, 1334);
		canvas.toDataURL('image/png', (err, jpeg) => {
			let data = {
				httpStatus: 200,
				data: {
					url: jpeg
				}
			}
			// res.json(data)
		 	res.render('index',{
		 		 title:'study book' ,
		 		 jpeg:jpeg,
		 		 description:'照片墙'
		 	})
		})
	}).catch(e => {
		console.log(e, 3333333333333333)
	})
	
})


module.exports = router;