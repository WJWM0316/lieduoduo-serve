var express = require('express');
var router = express.Router();
var path = require('path');
var public = path.resolve('./public')
var {createCanvas, loadImage, registerFont} = require('canvas');

registerFont(public + '/font/PingFangSC.ttf', { family: 'PingFangSC' })
registerFont(public + '/font/PingFangSC-bold.ttf', { family: 'PingFangSC-bold' })
registerFont(public + '/font/PingFangSC-light.ttf', { family: 'PingFangSC-light' })

var httpRequest = require('../../config/httpRequest.js')
var pocessor = require('../../utils/canvasPocessor.js')
var randomCopy = require('../../utils/randomCopy.js')

router.get('/position_min', async function(req, res, next) {
	const canvas = createCanvas(750, 1180);
	const ctx = canvas.getContext('2d');
	ctx.textBaseline = "top"
	req.headers['Authorization'] = '37366e3cbdc1969a72af09f6d29dd6bb'
	if (req.headers['authorization-app']) {
		req.headers['Authorization'] = req.headers['authorization-app']
	}
	ctx.fillStyle = '#652791'
	ctx.fillRect(0, 0, 750, 1180)

	// 请求数据
	let data = await httpRequest({
		hostType: 'qzApi', 
		method: 'GET', 
		url: `/position/${req.query.id}`, 
		data: req.query, 
		req,
		res,
		next
	})
	let info = data.data

  // 头像
  let avatarUrl = await loadImage(info.recruiterInfo.avatar.smallUrl)
  ctx.drawImage(avatarUrl, 300, 131, 150, 150)
  // 二维码
  let qrCode = await httpRequest({
    hostType: 'pubApi', 
    method: 'GET', 
    url: `/share/position_share`, 
    data: {positionId : 1687}, 
    req,
    res,
    next
  })
  let qrCodeUrl = await loadImage(qrCode.data.positionQrCodeUrl)
  ctx.drawImage(qrCodeUrl, 289, 831, 175, 175)
  // 背景图1
  let bg1 = await loadImage(public + '/images/exPosition.png')
  ctx.drawImage(bg1, 0, 0, 750, 1180)

  // 个人资料
  ctx.textAlign = 'center'
  ctx.fillStyle = '#ffffff'
  ctx.font = '34px PingFangSC';
  pocessor.ellipsis(ctx, `${info.recruiterInfo.name}`, 260, 375, 306)
  ctx.font = '24px PingFangSC';
  pocessor.ellipsis(ctx, `${info.recruiterInfo.companyShortname} | ${info.recruiterInfo.position}`, 550, 375, 354)
  ctx.font = '22px PingFangSC';
  ctx.fillText(randomCopy.agreedTxtB(), 375, 413)

  // 主要内容
  ctx.font = '58px PingFangSC';
  pocessor.ellipsis(ctx, info.positionName, 640, 375, 558)
  ctx.font = '50px PingFangSC';
  ctx.fillText(`${info.emolumentMin}K~${info.emolumentMax}K`, 375, 632)

  // icon
  ctx.font = '24px PingFangSC';
  ctx.textAlign = 'left'
  let cityWidth = ctx.measureText(info.city).width
  let edWidth = ctx.measureText(info.educationName).width
  let exWidth = ctx.measureText(info.workExperienceName).width
  let allWidth = cityWidth + edWidth + exWidth + 90 + 30 + 80
  let msgWidth = 375 - allWidth / 2
  let adressIcon = await loadImage(public + '/images/adress.png')
  ctx.drawImage(adressIcon, msgWidth, 714, 30, 30)
  msgWidth = msgWidth + 40
  ctx.fillText(info.city, msgWidth, 717)
  msgWidth = msgWidth + cityWidth + 40
  let experienceIcon = await loadImage(public + '/images/experience.png')
  ctx.drawImage(experienceIcon, msgWidth, 714, 30, 30)
  msgWidth = msgWidth + 40
  ctx.fillText(info.workExperienceName, msgWidth, 717)
  msgWidth = msgWidth + exWidth + 40
  let degreeIcon = await loadImage(public + '/images/degree.png')
  ctx.drawImage(degreeIcon, msgWidth, 714, 30, 30)
  msgWidth = msgWidth + 40
  ctx.fillText(info.educationName, msgWidth, 717)

// 标签
  let r = 24
  ctx.textAlign = 'left'
  function addLabel(item, index) {
    let x=0, y=0
    switch(index) {
      case 0: 
        x = 270
        y = 204
        break
      case 1:
        x = 520
        y = 136
        break
      case 2: 
        x = 238
        y = 128
        break
      case 3:
        x = 494
        y = 200
        break
      case 4: 
        x = 445
        y = 64
        break
      case 5:
        x = 276
        y = 64
        break
      case 6:
        x = 212
        y = 265
        break
      case 7:
        x = 538
        y = 266
        break
    }
    let metricsW = ctx.measureText(item).width // 文本宽度
    if (index === 0 || index === 2 || index === 5 || index === 6) {
      x = x - metricsW - 2*r
    }
    ctx.strokeStyle = '#fff'
    ctx.beginPath()
    ctx.moveTo(x + r, y)
    ctx.lineTo(x + r + metricsW, y)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(x + r, y + r, r, 0.5*Math.PI, 1.5*Math.PI)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x + r + metricsW, y + 2*r)
    ctx.lineTo(x + r, y + 2*r)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(x + r + metricsW, y + r, r, 1.5*Math.PI, 0.5*Math.PI)
    ctx.stroke()
    ctx.fillText(item, x + r, y + 11)
  }
  info.lightspotInfo.map((item, index) => {
    addLabel(item, index)
  })

  ctx.textAlign = 'center'
  ctx.font = '26px PingFangSC';
  ctx.fillText('长按打开小程序查看职位详情', 375, 1024)

  if (info.recruiterInfo.recruiterTypes.length !== 0) {
    let types = ''
    info.recruiterInfo.recruiterTypes.map((item, index) => {
      if (index === 0) {
        types = item.name
      } else {
        types = `${types}、${item.name}`
      }
    })
    let string = `Ta还有${pocessor.ellipsisText(ctx, types, 275)}等${info.recruiterInfo.positionNum}个职位在招 !`
    pocessor.ellipsis(ctx, string, 554, 375, 1071, '#FFFFFF', {color: '#ffffff', r:21, y:1066, maxWidth: 750, height: 42, opacity: 0.3})
  }
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
	});
})

module.exports = router;