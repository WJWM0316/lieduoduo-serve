var express = require('express');
var canvas = require('canvas');
var router = express.Router();
var httpRequest = require('../../config/httpRequest.js')
var pocessor = require('../../utils/timePocessor.js')

// 限时抢购
router.get('/surface/rapidly', async function(req, res, next) {
	let data = await httpRequest({
		hostType: 'qzApi', 
		method: 'GET', 
		url: '/surface/rapidly', 
		data: req.query, 
		req,
		res,
		next
	})
	let getData = data.data,
			output = {
				buttons: getData.buttons,
				joinUserTotal: getData.joinUserTotal,
				toastTips: getData.toastTips,
				joinUserAvatars: [],
				items: []
			}
	getData.joinUserAvatars.forEach((item) => {
		output.joinUserAvatars.push({smallUrl: item.smallUrl})
	})
	getData.items.forEach((item) => {
		let restTime = pocessor.restTime(new Date(item.endTime).getTime())
		output.items.push(
			{
				id: item.id,
				logo: item.companyInfo.logoInfo.smallUrl,
				companyShortname: item.companyInfo.companyShortname,
				oneSentenceIntro: item.companyInfo.oneSentenceIntro || '暂没有设置',
				employeesInfo: item.companyInfo.employeesInfo,
				industry: item.companyInfo.industry,
				financingInfo: item.companyInfo.financingInfo,				
				positionName: item.positionName,
				city: item.city,
				district: item.district,
				workExperienceName: item.workExperienceName,
				educationName: item.educationName,
				applyNum: item.applyNum,
				seatsNum: item.seatsNum,
				annualSalary: item.annualSalary,
				salary: `${item.emolumentMin}~${item.emolumentMax}K`,
				endTime: item.endTime,
				day: restTime.day,
				hour: restTime.hour,
				minute: restTime.minute,
				second: restTime.second,
			})
	})
	data.data = output
	res.json(data)
});



// 近期精选
router.get('/surface/recent', async function(req, res, next) {
	let data = await httpRequest({
		hostType: 'qzApi', 
		method: 'GET', 
		url: '/surface/recent', 
		data: req.query,
		req,
		res,
		next
	})
	let getData = data.data,
			output = []
	getData.forEach((item) => {
		let restTime = pocessor.restTime(new Date(item.endTime).getTime())
		output.push(
			{
				id: item.id,
				logo: item.companyInfo.logoInfo.smallUrl,
				companyShortname: item.companyInfo.companyShortname,
				oneSentenceIntro: item.companyInfo.oneSentenceIntro || '暂没有设置',
				employeesInfo: item.companyInfo.employeesInfo,
				industry: item.companyInfo.industry,
				financingInfo: item.companyInfo.financingInfo,				
				positionName: item.positionName,
				city: item.city,
				district: item.district,
				workExperienceName: item.workExperienceName,
				educationName: item.educationName,
				applyNum: item.applyNum,
				seatsNum: item.seatsNum,
				annualSalary: item.annualSalary,
				salary: `${item.emolumentMin}~${item.emolumentMax}K`,
				endTime: item.endTime,
				day: restTime.day,
				hour: restTime.hour,
				minute: restTime.minute,
				second: restTime.second,
			})
	})
	data.data = output
	res.json(data)
});


module.exports = router;



