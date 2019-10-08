var express = require('express');
var router = express.Router();
var path = require('path');
// var QRCode = require('qrcode');
var public = path.resolve('./public')
var {createCanvas, loadImage, registerFont} = require('canvas');
var Global = require("../../config/global.js"); //根据环境变量，获取对应的IP

registerFont(public + '/font/PingFangSC.ttf', { family: 'PingFangSC' })
registerFont(public + '/font/PingFangSC-bold.ttf', { family: 'PingFangSC-bold' })
registerFont(public + '/font/PingFangSC-light.ttf', { family: 'PingFangSC-light' })

var httpRequest = require('../../config/httpRequest.js')
var pocessor = require('../../utils/canvasPocessor.js')

router.get('/wantYou', async function(req, res, next) {
  const canvas = createCanvas(750, 1334);
  const ctx = canvas.getContext('2d');
  ctx.textBaseline = "top"
  if (req.query.token) req.headers['Authorization'] = req.query.token
  if (req.headers['authorization-app']) {
    req.headers['Authorization'] = req.headers['authorization-app']
  }
  // 画背景
  
  let imgUrl = await loadImage(public + '/images/wantYouBg.jpg')
  ctx.drawImage(imgUrl, 0, 0, 750, 1334);

  let data = req.query.uid ? 
  await httpRequest({
    hostType: 'pubApi', 
    method: 'GET', 
    url: `/recruiter/detail/uid/${req.query.uid}`, 
    data: req.query, 
    req,
    res,
    next
  })
  :
  await httpRequest({
    hostType: 'zpApi', 
    method: 'GET', 
    url: `/recruiter/detail`, 
    data: req.query, 
    req,
    res,
    next
  })

  let info = data.data

  // 头像
  ctx.save();
  ctx.arc(298 + 78, 407 + 78, 78, 0, Math.PI * 2);
  
  ctx.clip();
  let avatarUrl = await loadImage(info.avatar.smallUrl)
  ctx.drawImage(avatarUrl, 298, 407, 156, 156)
  ctx.restore()

  ctx.fillStyle = '#ffffff';
  
  ctx.textAlign = 'center';
  ctx.font = 'bold 46px PingFangSC-bold'
  ctx.fillText(info.companyShortname, 375, 141)
  ctx.font = '28px PingFangSC';
  ctx.fillText('“ 招聘路上太孤单，不想再孤身奋战 ”', 375, 760)
  ctx.font = 'bold 40px PingFangSC-bold'
  ctx.fillText(info.name, 375, 598)
  ctx.font = '24px PingFangSC';
  ctx.fillText(info.position, 375, 652)
  // const qrcodeCanvas = createCanvas(185, 185);

  // let p = `${Global.webHost}wantYou_b?vkey=sdfcxfe&uid=${req.query.uid}`
  // let path = `page/common/pages/webView/webView?type=1&p=${encodeURIComponent(p)}`
  // QRCode.toCanvas(qrcodeCanvas, path, function (err, jpeg) {
  //   console.log(err, jpeg, 'success!');
  //   ctx.arc(495 + 92, 1004 + 92,  92, 0, Math.PI * 2);
  //   ctx.clip();
  //   ctx.drawImage(jpeg, 495, 1004, 185, 185);
  // })

  canvas.toDataURL('image/png', (err, jpeg) => {
    let data = {
      httpStatus: 200,
      data: {
        url: jpeg,
        detail: info
      }
    }
    res.json(data)
    // res.render('index',{
    //     title:'study book' ,
    //     jpeg:jpeg,
    //     description:'照片墙'
    //  })
  });
})

module.exports = router;