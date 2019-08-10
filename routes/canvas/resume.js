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

router.get('/resume', async function(req, res, next) {
	const canvas = createCanvas(750, 5000);


	const ctx = canvas.getContext('2d');
	ctx.textBaseline = "top"
	req.headers['Authorization'] = 'cd62d5ec0139fba30dd57c6aaae98d33'
	if (req.headers['authorization-app']) {
		req.headers['Authorization'] = req.headers['authorization-app']
	}
	ctx.fillStyle = '#652791'
	ctx.fillRect(0, 0, 750, 5000)

	// 请求数据
	let data = await httpRequest({
		hostType: 'qzApi', 
		method: 'GET', 
		url: `/jobhunter/resume`, 
		data: req.query, 
		req,
		res,
		next
	})
	let info = data.data
  // 头像
  let avatarUrl = await loadImage(info.avatar.smallUrl)
  ctx.drawImage(avatarUrl, 306, 55, 138, 138)

  // 背景图1
  let resume1 = await loadImage(public + '/images/resume1.png')
  ctx.drawImage(resume1, 0, 0, 750, 401)
  // 个人资料
  ctx.fillStyle = '#282828'
  ctx.font = '46px PingFangSC';
  ctx.textAlign = 'center'
  ctx.fillText(info.name, 375, 219)

  let curHeight = 265
  if (info.lastCompanyName) {
    ctx.font = '26px PingFangSC';
    curHeight = curHeight + 42
    pocessor.ellipsis(ctx, `${info.lastCompanyName} | ${info.lastPosition}`, 500, 349, curHeight)
  }

  let resume2 = null
  if (info.jobStatusDesc) {
    curHeight = curHeight + 28
    resume2 = await loadImage(public + '/images/resume2.png')
    ctx.drawImage(resume2, 0, curHeight, 750, 120)
    ctx.fillStyle = '#EFE9F4'
    ctx.fillRect(278, curHeight, 195, 38)
    ctx.font = '24px PingFangSC';
    ctx.fillStyle = '#652791'
    ctx.fillText(info.jobStatusDesc, 375, curHeight + 4)
  }

  
  curHeight = curHeight + 60
  ctx.fillStyle = '#282828'
  ctx.font = '24px PingFangSC';
  ctx.textAlign = 'center'
  let ageDesc = ''
  if (!info.age) {
    ageDesc = '未填'
  } else {
    ageDesc = `${info.age}岁`
  }
  let cityWidth = ctx.measureText(info.workAgeDesc).width
  let edWidth = ctx.measureText(ageDesc).width
  let exWidth = ctx.measureText(`${info.degreeDesc}`).width

  let allWidth = cityWidth + edWidth + exWidth + 90 + 30 + 80

  let msgWidth = 375 - allWidth / 2
  let experienceIcon = await loadImage(public + '/images/experience.png')
  ctx.drawImage(experienceIcon, msgWidth, curHeight, 30, 30)
  msgWidth = msgWidth + 40
  ctx.fillText(info.workAgeDesc, msgWidth, curHeight + 1)
  msgWidth = msgWidth + cityWidth + 40
  let birthdayIcon = await loadImage(public + '/images/birthday.png')
  ctx.drawImage(birthdayIcon, msgWidth, curHeight, 30, 30)
  msgWidth = msgWidth + 40
  ctx.fillText(ageDesc, msgWidth, curHeight + 1)
  msgWidth = msgWidth + exWidth + 40
  let degreeIcon = await loadImage(public + '/images/degree.png')
  ctx.drawImage(degreeIcon, msgWidth, curHeight, 30, 30)
  msgWidth = msgWidth + 40
  ctx.fillText(info.degreeDesc, msgWidth, curHeight + 1)
  ctx.drawImage(resume2, 0, curHeight + 30, 750, 50)









  

  // newCtx.putImageData(ctx.getImageData(0, 0, 750, curHeight), 0, 0)

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