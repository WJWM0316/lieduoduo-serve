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

  let data = await httpRequest({
    hostType: 'zpApi', 
    method: 'GET', 
    url: `/recruiter/detail`, 
    data: req.query, 
    req,
    res,
    next
  })

  let info = data.data || {}
  if (!info.uid) {
    let data1 = await httpRequest({
      hostType: 'zpApi', 
      method: 'GET', 
      url: `/company/identity`, 
      data: req.query, 
      req,
      res,
      next
    })
    info = {
      avatar: {
        smallUrl: ''
      },
      name: '',
      companyShortname: ''
    }
    info.avatar.smallUrl = 'https://attach.lieduoduo.ziwork.com/avatar/2019/0130/11/5c5114dd36286.png!130xauto'
    info.name = data1.data.companyInfo.realName || '神秘星人'
    info.position = data1.data.companyInfo.userPosition || '金牌HR'
    info.companyShortname = data1.data.companyInfo.companyShortname
  }
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

  let p = `${Global.webHost}/wantYou_b?vkey=sdfcxfe&uid=${req.query.uid}`
  let qrCodeData = await httpRequest({
    hostType: 'pubApi', 
    method: 'POST', 
    url: `/share/mini/program/qr/code`, 
    data: {path: 'page/common/pages/webView/webView', params: `p=${encodeURIComponent(p)}`, type: 'want_you_activity'}, 
    req,
    res,
    next
  })
  ctx.arc(495 + 92, 1004 + 92,  92, 0, Math.PI * 2);
  ctx.clip();
  if (qrCodeData.data.url) {
    let qrCode = await loadImage(qrCodeData.data.url)
    ctx.drawImage(qrCode, 495, 1004, 185, 185);
  }
  
  

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