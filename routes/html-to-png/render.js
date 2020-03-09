const express = require('express');
const router = express.Router();
const httpRequest = require('../../config/httpRequest.js')

// 渲染简历
router.get('/s-resume', async(req, res, next) => {
    const {token, id} = req.query
    if (token) {
		req.headers['Authorization'] = token
    }
    let {data: data} = await httpRequest({
		hostType: 'qzApi',
		method: 'GET', 
		url: `/jobhunter/resume`, 
		data: {...req.query, uid: id}, 
		req,
		res,
		next
    })
    let {data: {positionQrCodeUrl}} = await httpRequest({
        hostType: 'pubApi', 
        method: 'GET', 
        url: `/share/resume_share`, 
        data: {resumeUid: id}, 
        req,
        res,
        next
    })
    // 数组排错
    const arrItem = ['personalizedLabels', 'careers', 'projects', 'educations', 'expects']
    arrItem.forEach(val => {
        data[val] = data[val] || []
    })
    data.expects.forEach(val => {
        val.fieldsStr = val.fields.map(item=> item.field).join(' · ')
    })
    data.careers.forEach (val => {
        val.startTime = val.startTimeDesc.replace('-', '.')
        val.endTime = val.endTimeDesc.replace('-', '.')
    })
    data.educations.forEach (val => {
        val.startTime = val.startTimeDesc.replace('-', '.')
        val.endTime =  val.endTimeDesc.replace('-', '.')
    })
    data.qrCode = positionQrCodeUrl
    res.render('html-to-png/s-resume', data)
})

// 渲染职位
router.get('/s-position', async(req, res, next) => {
    const {token, id} = req.query
    if (token) {
		req.headers['Authorization'] = token
    }
    let {data: data} = await httpRequest({
		hostType: 'qzApi',
		method: 'GET', 
		url: `/position/${id}`, 
		data: req.query,
		req,
		res,
		next
    })
    // 请求数据
	let {data: {positionQrCodeUrl}} = await httpRequest({
		hostType: 'pubApi', 
		method: 'GET', 
		url: `/share/position_share`, 
		data: {positionId : id, type: 'qrpl'}, 
		req,
		res,
		next
    })
    data.qrCode = positionQrCodeUrl
    res.render('html-to-png/s-position', data)
})

router.get('/s-hot-position', async(req, res, next) => {
    const {token, id, card} = req.query
    let cardType = card  === 1
    if (token) {
		req.headers['Authorization'] = token
    }
    let {data: data} = await httpRequest({
		hostType: 'qzApi',
		method: 'GET', 
		url: `/position/${id}`, 
		data: req.query,
		req,
		res,
		next
    })
    // 请求数据
	let {data: {positionQrCodeUrl}} = await httpRequest({
		hostType: 'pubApi', 
		method: 'GET', 
		url: `/share/position_share`, 
		data: {positionId : id, type: 'qrpl'}, 
		req,
		res,
		next
    })
    data.qrCode = positionQrCodeUrl
    data.cardType = cardType
    res.render('html-to-png/s-hot-position', data)
})

router.get('/s-recruiter', async(req, res, next) => {
    const {token, id} = req.query
    if (token) {
		req.headers['Authorization'] = token
    }
    
    let {data: data} = await httpRequest({
		hostType: 'zpApi', 
		method: 'GET', 
		url: `/recruiter/detail/uid/${id}`, 
		data: req.query, 
		req,
		res,
		next
    })
    // 请求数据
    let positionData = await httpRequest({
        hostType: 'zpApi', 
        method: 'GET', 
        url: `/position/list`, 
        data: {recruiter: id, count: 2, is_online: 1}, 
        req,
        res,
        next
    })
    let {data: {positionQrCodeUrl}} = await httpRequest({
        hostType: 'pubApi', 
        method: 'GET', 
        url: `/share/recruiter_share`, 
        data: {recruiterUid: req.query.uid}, 
        req,
        res,
        next
      })
    data.positions = positionData.data || []
    data.qrCode = positionQrCodeUrl
    res.render('html-to-png/s-recruiter', data)
})

module.exports = router;