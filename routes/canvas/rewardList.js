var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

var public = path.resolve('./public')
var {createCanvas, loadImage, registerFont} = require('canvas');
var Global = require("../../config/global.js"); //根据环境变量，获取对应的IP

registerFont(public + '/font/PingFangSC.ttf', { family: 'PingFangSC' })
registerFont(public + '/font/PingFangSC-bold.ttf', { family: 'PingFangSC-bold' })
registerFont(public + '/font/PingFangSC-light.ttf', { family: 'PingFangSC-light' })

var httpRequest = require('../../config/httpRequest.js')



router.get('/rewardList', async function(req, res, next) {
  const canvas = createCanvas(750, 1334);
  const ctx = canvas.getContext('2d');
  ctx.textBaseline = "top"
  if (req.query.token) req.headers['Authorization'] = req.query.token
  if (req.headers['authorization-app']) {
    req.headers['Authorization'] = req.headers['authorization-app']
  }
  // 画背景
  let imgUrl = await loadImage(public + '/images/poster1.jpg')
  ctx.drawImage(imgUrl, 0, 0, 750, 1334);

  let data = await httpRequest({
    hostType: 'pubApi', 
    method: 'POST', 
    url: `/activity/mini/program/qr/code`, 
    data: req.query, 
    req,
    res,
    next
  })
  let info = data.data || null
  

  ctx.arc(270 + 105, 1007 + 105,  105, 0, Math.PI * 2);
  ctx.clip();
  if (data.positionQrCodeUrl) {
    let qrCode = await loadImage(data.positionQrCodeUrl)
    ctx.drawImage(qrCode, 270, 1007, 210, 210);
  }
  
  

  canvas.toDataURL('image/png', (err, jpeg) => {
  let jsonData = {
     httpStatus: 200,
     data: {
       url: jpeg
     }
   }
   res.json(jsonData)
   // res.render('index',{
   //    title:'study book' ,
   //    jpeg:jpeg,
   //    description:'照片墙'
   //  })
  })

})

module.exports = router;