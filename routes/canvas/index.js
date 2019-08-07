var express = require('express');
var router = express.Router();
var path = require('path');
var {createCanvas, loadImage} = require('canvas');

var httpRequest = require('../../config/httpRequest.js')
var pocessor = require('../../utils/canvasPocessor.js')

router.get('/rapidlyViwe', async function(req, res, next) {
	const canvas = createCanvas(750, 1334);
	const ctx = canvas.getContext('2d');
	ctx.textBaseline = "top"

	// 画背景
	let imgUrl = await loadImage('https://attach.lieduoduo.ziwork.com/poster/specialJobBg.png')
	ctx.drawImage(imgUrl, 0, 0, 750, 1334);

	// 请求数据
	let data = await httpRequest({
		hostType: 'qzApi', 
		method: 'GET', 
		url: '/surface/rapidly', 
		data: req.query, 
		req,
		res,
		next
	})

	let list = data.data.items,
			curY = 500,
			curX = 121
  list.forEach((item, index) => {
  	if (index > 4) return
  	if (index % 2 === 0) {
  		curX = 121
  		if (index > 0) curY += 156
  	} else {
  		curX = 409
  	}
  	ctx.font = 'normal 38px PingFangSC';
    let nextPositionX = pocessor.ellipsis(ctx, item.positionName, 160, curX, curY, "#282828") + 10
    ctx.font = 'normal 22px PingFangSC';
    pocessor.ellipsis(ctx, item.city, 80, nextPositionX + 5, curY + 8, '#8452A7', {x: nextPositionX, y: curY + 3, padding: 5, height: 30, color: '#EFE9F4'})
    let txt = `${item.emolumentMin}~${item.emolumentMax}K`
    if (item.annualSalary > 12) txt = `${txt}·${item.annualSalary}薪`
    ctx.font = 'bold 32px PingFangSC';
    ctx.fillStyle = '#FF7F4C'
    ctx.fillText(txt, curX, curY + 50)
  })

	let qrcode = await httpRequest({
		hostType: 'qzApi', 
		method: 'GET', 
		url: '/surface/rapidly/qrcode', 
		data: req.query, 
		req,
		res,
		next
	})

	
	ctx.beginPath();
	ctx.arc(105 + 94, 1100 + 94, 94, 0, Math.PI * 2);
	ctx.clip();
	let qrcodeUrl = await loadImage(qrcode.data.qrcodeUrl)
	ctx.drawImage(qrcodeUrl, 105, 1100, 195, 195);

	canvas.toDataURL('image/png', (err, jpeg) => {
		let data = {
			httpStatus: 200,
			data: {
				url: jpeg
			}
		}
		res.json(data)
	 	// res.render('index',{
	 	// 	 title:'study book' ,
	 	// 	 jpeg:jpeg,
	 	// 	 description:'照片墙'
	 	// })
	});
})
module.exports = router;