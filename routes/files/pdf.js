var fs = require('fs');
var express = require('express');
var router = express.Router();
var path = require('path');
var public = path.resolve('./public')
var ossPut = require('../../api/common.js');
var httpRequest = require('../../config/httpRequest.js')

var filesPocessor = require('../../utils/filesPocessor.js')

global.window = {document: {createElementNS: () => {return {}} }};
global.navigator = {};
global.html2pdf = {};
global.btoa = require('btoa')
global.atob = require('atob')
var normal = require(public + '/font/NotoSansCJKjp.js')
var bold = require(public + '/font/NotoSansCJKtc-Medium-bold.js')
var light = require(public + '/font/NotoSansCJKtc-Light-italic.js')
const jsPDF = require('../../utils/jspdf.node.debug.js')
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.post('/pdf', urlencodedParser, async function(req, res, next) {
  // 支持参数登录
  if (req.query.token) req.headers['Authorization'] = req.query.token
  if (req.headers['authorization-app']) {
    req.headers['Authorization'] = req.headers['authorization-app']
  }

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

  let info   = data.data,
      avator = await filesPocessor.loadImageFile(info.avatar.url.replace('.png', '.png!png2jpg')),
	    logo   = await filesPocessor.loadImageFile('https://lieduoduo-uploads-test.oss-cn-shenzhen.aliyuncs.com/poster/pdfBg.jpg'),
			icon1  = await filesPocessor.loadImageFile('https://lieduoduo-uploads-test.oss-cn-shenzhen.aliyuncs.com/poster/experience.jpg'),
			icon2  = await filesPocessor.loadImageFile('https://lieduoduo-uploads-test.oss-cn-shenzhen.aliyuncs.com/poster/age.jpg'),
			icon3  = await filesPocessor.loadImageFile('https://lieduoduo-uploads-test.oss-cn-shenzhen.aliyuncs.com/poster/education.jpg'),
			icon4  = await filesPocessor.loadImageFile('https://lieduoduo-uploads-test.oss-cn-shenzhen.aliyuncs.com/poster/number.jpg'),
			icon5  = await filesPocessor.loadImageFile('https://lieduoduo-uploads-test.oss-cn-shenzhen.aliyuncs.com/poster/wechat.jpg'),
			line   = await filesPocessor.loadImageFile('https://lieduoduo-uploads-test.oss-cn-shenzhen.aliyuncs.com/poster/line.jpg')
  // new 一个pdf对象
  var doc 	 = new jsPDF({orientation: 'p', unit: 'px', format: [1240, 1754], putOnlyUsedFonts: true}),
			ctx    = doc.context2d;
	
  // 设置字体 支持中文
  doc.addFileToVFS(public + '/font/NotoSansCJKtc-Regular.ttf', normal);
  doc.addFont(public + '/font/NotoSansCJKtc-Regular.ttf', 'normal', 'normal');
	
	doc.addFileToVFS(public + '/font/NotoSansCJKtc-Medium.ttf', bold);
	doc.addFont(public + '/font/NotoSansCJKtc-Medium.ttf', 'bold', 'normal');
	
	doc.addFileToVFS(public + '/font/NotoSansCJKtc-Light-italic.ttf', light);
	doc.addFont(public + '/font/NotoSansCJKtc-Light-italic.ttf', 'light', 'normal');
	
	let docHeight  = 1754 - 40,
			pageHeight = 66,
			pageWidth  = 1240,
			pageNum    = 0,
			widthLimit = 886,
			linex      = 112,
			x1         = 108,
			x2				 = 244,
			x3         = 1130
			
	// 添加页数
	function addPage () {
		pageHeight = 66 + 69
		doc.addPage(1)
		doc.addImage(logo, 'test', 0, 0, 0, 66)
		return pageHeight
	}
	
	// 计算文本宽度
	function measureText(fontSize, string, x, y) {
		if (!string) return 0
		ctx.font = `${fontSize}px normal`
		let Multiple = 0
		switch (fontSize) {
			case 24:
				Multiple = 1.8
				break
			case 26:
				Multiple = 1.75
				break	
		}

		return ctx.measureText(string).width / Multiple
	}
	
	// 添加长文本
	function addLongText(txt, x, y, fontSize, lineHeight, widthLimit) {
		if (!txt) return 0
		txt = txt.replace(/[\r\n]/g, '<newLine>')
		let textArray = txt.split('<newLine>')
		textArray.forEach((item, index) => {
			let length  = measureText(fontSize, item,)
			let lineNum = Math.ceil(length / widthLimit),
					textH   = lineHeight * (fontSize * 0.76) * lineNum,
					isSplit = false
			// 判断是否已经超过一页了
			if ((textH + pageHeight) > docHeight) {

				// 判断多行文本跨页，则分页渲染
				if (lineNum > 1) {
					isSplit = true
					let newTextH  = 0, // 重新一行行计算高度
							crossPage = 0, // 判断第几行开始跨页
							itemWidth = 0, // 重新计算节点宽度
							rowNum    = 0,  // 开始计算行数
							curString = '', // 当前页需要渲染的字符串
							nextString= '' // 下一页需要渲染的字符串
					for (var i = 2; i <= lineNum; i++) {
						newTextH = lineHeight * (fontSize * 0.76) * i
						if ((newTextH + pageHeight) > docHeight) {
							crossPage = i
							 break
						}
					}
					for (var i = 0; i < item.length - 1; i++) {
						itemWidth += measureText(fontSize, item[i])
						if (itemWidth > widthLimit) {
							rowNum++
							if (rowNum === crossPage) {
								curString = item.slice(0, i)
								nextString = item.slice(i, item.length - 1)
								doc.text(curString, x, pageHeight, {maxWidth: widthLimit, baseline: 'top', lineHeightFactor: lineHeight})
								pageHeight = addPage()
								doc.text(nextString, x, pageHeight, {maxWidth: widthLimit, baseline: 'top', lineHeightFactor: lineHeight})
								pageHeight += lineHeight * (fontSize * 0.76)
								break
							}
						}
					}
				} else {
					addPage()
				}
			}
			
			if (!isSplit) {
				doc.text(item, x, pageHeight, {maxWidth: widthLimit, baseline: 'top', lineHeightFactor: lineHeight})
				if (index <= textArray.length - 1) {
					pageHeight += textH
				}
			} 
		})
		pageHeight -= (fontSize * 0.24)
		if (x) {
			// doc.rect(x, y, widthLimit, pageHeight - y)
		}
		return pageHeight
	}
	
	// 添加虚线
	function addLine () {
		doc.addImage(line, 'test', x1, pageHeight, 1022, 9)
	}
	
	// 设置字体
	function setFontType(type) {
		switch(type) {
			case 'h1':
				doc.setFont('bold')
				doc.setTextColor('#333333')
				doc.setFontSize(52)
				break
			case 'h2':
				doc.setFont('bold')
				doc.setTextColor('#333333')
				doc.setFontSize(32)
				break
			case 'h3':
				doc.setFont('normal')
				doc.setTextColor('#333333')
				doc.setFontSize(26)
				break
			case 'p1':
				doc.setFont('light')
				doc.setTextColor('#282828')
				doc.setFontSize(24)
				break
			case 'p2':
				doc.setFont('normal')
				doc.setTextColor('#6D696E')
				doc.setFontSize(24)
				break
			case 'c1':
				doc.setFont('normal')
				doc.setTextColor('#652791')
				doc.setFontSize(24)
				break
			case 'c2':
				doc.setFont('normal')
				doc.setTextColor('#652791')
				doc.setFontSize(24)
				break
		}
	}
	
	
  // // 版头
  doc.setFillColor('#652791');
	doc.setDrawColor('#6D696E')			
	doc.setLineHeightFactor(1)
  doc.setFont('normal')
  doc.addImage(logo, 'test', 0, 0, pageWidth, 66)
  
	// 个人信息
  pageHeight += 69
  doc.setLineHeightFactor('1.4')
	doc.setFillColor('#fff')
	doc.circle(x1 + 107 / 2, pageHeight + 107 / 2, 53.5, 'F')
	doc.clip()
	doc.addImage(avator, 'test', x1, pageHeight, 107, 107)  // 头像
	doc.discardPath()
	setFontType('h1')
  doc.text(info.name, x2, pageHeight, {baseline: 'top'}) // 姓名
	setFontType('h3')
  doc.text(info.lastCompanyName + '-' + info.lastPosition, x2, pageHeight + 50, {baseline: 'top'}); // 前公司前职位
	
	// 工作经验、年龄、学历
  doc.addImage(icon1, 'test', x2, pageHeight + 87, 19, 19)
	setFontType('p1')
	doc.text(info.workAgeDesc, x2 + 19 + 10, pageHeight + 87, {baseline: 'top'})
	let nextX = x2 + 19 + 10 + measureText(24, info.workAgeDesc) + 22
	doc.addImage(icon2, 'test', nextX, pageHeight + 87, 19, 19)
	nextX += (19 + 10)
	doc.text(info.age + '岁', nextX, pageHeight + 87, {baseline: 'top'})
  nextX += measureText(24, info.age + '岁') + 22
	doc.addImage(icon3, 'test', nextX, pageHeight + 87, 19, 19)
	nextX += (19 + 10)
	doc.text(info.degreeDesc, nextX, pageHeight + 87, {baseline: 'top'})
	nextX += measureText(24, info.degreeDesc)
  
	// 联系方式
	let textX = x2 + measureText(26, info.lastCompanyName + '-' + info.lastPosition, x2, pageHeight + 44)
	if (textX < nextX) {
		textX = nextX
	}
	
	doc.line(textX + 57, pageHeight + 44, textX + 57, pageHeight + 107, 'S')
	let iconx = textX + 57 + 63
	doc.addImage(icon4, 'test', iconx, pageHeight + 51, 19, 19)
	doc.text(info.mobile, iconx + 19 + 13, pageHeight + 51, {baseline: 'top'})
	if (info.wechat) {
		doc.addImage(icon5, 'test', iconx, pageHeight + 85, 20, 18)
		doc.text(info.wechat, iconx + 20 + 12, pageHeight + 85, {baseline: 'top'})
	}
	
	// 自我描述
	pageHeight += 167
	setFontType('h2')
	doc.text('自我描述', x1, pageHeight, {baseline: 'top'})
	setFontType('p2')
	pageHeight = addLongText(info.signature, x2, pageHeight, 24, 1.65, widthLimit) + 15
	setFontType('c1')
	doc.setDrawColor('#652791')
	
	if (info.personalizedLabels.length) {
		let labelx = x2
		info.personalizedLabels.map((item, index) => {
			doc.roundedRect(labelx, pageHeight, measureText(24, item.labelName) + 30, 30, 15, 15 , 'S')
			doc.text(item.labelName, labelx + 15, pageHeight + 5, {baseline: 'top'})
			labelx += measureText(24, item.labelName) + 30 + 15
		})
	}
	pageHeight += (30 + 58)
	addLine()
	
	// 求职意向
	if (info.expects.length) {
		pageHeight += (9 + 58)
		setFontType('h2')
		doc.text('求职意向', x1, pageHeight, {baseline: 'top'})
		info.expects.map((item, index) => {
			let desc = [],
					txt  = ''
			item.fields.map((n, i) => {desc.push(n.field)})
			desc = desc.join(' ')
			txt  = `${item.position }\v\v|\v\v${ item.city }\v\v|\v\v${ desc}`
			setFontType('p2')
			doc.text(txt, x2, pageHeight, {maxWidth: widthLimit, baseline: 'top'})
			let txtWidth = measureText(24, txt)
			setFontType('c2')
			doc.text(`${item.salaryFloor}-${item.salaryCeil}k`, x2 + txtWidth + 15, pageHeight, {baseline: 'top'})
			pageHeight += 35
		})
		pageHeight -= 35
		pageHeight += (58 + 20)
		addLine()
	}
	
	// 工作经历
	if (info.careers.length) {
			pageHeight += (58 + 9)
			setFontType('h2')
			doc.text('工作经历', x1, pageHeight, {baseline: 'top'})
			info.careers.map((item, index) => {
				setFontType('h3')
				doc.text(`${item.company}\v\v|\v\v${item.position}`, x2, pageHeight, {baseline: 'top'})
				let time = item.startTimeDesc ? `${item.startTimeDesc}-${item.endTimeDesc}` : `${item.endTimeDesc}`
				setFontType('p2')
				doc.text(time, x3, pageHeight, {align: 'right', baseline: 'top'})
				pageHeight += 40
				if (item.duty) pageHeight = addLongText(item.duty, x2, pageHeight, 24, 1.65, widthLimit)
				if (item.technicalLabels.length) {
					let labelx = x2
					pageHeight += 15
					item.technicalLabels.map((n, i) => {
						setFontType('c1')
						let labelName = `#\v${n.labelName}`
						doc.roundedRect(labelx, pageHeight, measureText(24, labelName) + 30, 30, 15, 15 , 'S')
						doc.text(labelName, labelx + 15, pageHeight + 5, {baseline: 'top'})
						labelx += measureText(24, labelName) + 30 + 15
					})
					pageHeight += 30
				}
				pageHeight += 50
			})
			addLine()
		}

	// 项目经历
	if (info.projects.length) {
		pageHeight += (58 + 9)
		setFontType('h2')
		doc.text('项目经历', x1, pageHeight, {baseline: 'top'})
		info.projects.map((item, index) => {
			setFontType('h3')
			doc.text(`${item.name}\v\v|\v\v${item.role}`, x2, pageHeight, {baseline: 'top'})
			let time = item.startTimeDesc ? `${item.startTimeDesc}-${item.endTimeDesc}` : `${item.endTimeDesc}`
			setFontType('p2')
			doc.text(time, x3, pageHeight, {align: 'right', baseline: 'top'})
			pageHeight += 40
			if (item.description) pageHeight = addLongText(item.description, x2, pageHeight, 24, 1.65, widthLimit) + 50
		})
		addLine()
	}

	// 教育经历
	if (info.educations.length) {
		pageHeight += (58 + 9)
		setFontType('h2')
		doc.text('教育经历', x1, pageHeight, {baseline: 'top'})
		info.educations.map((item, index) => {
			setFontType('h3')
			doc.text(`${item.school}\v\v|\v\v${item.degreeDesc}\v\v|\v\v${item.major}`, x2, pageHeight, {baseline: 'top'})
			let time = item.startTimeDesc ? `${item.startTimeDesc}-${item.endTimeDesc}` : `${item.endTimeDesc}`
			setFontType('p2')
			doc.text(time, x3, pageHeight, {align: 'right', baseline: 'top'})
			pageHeight += 40
			pageHeight += addLongText(item.experience, x2, pageHeight, 24, 1.65, widthLimit) + 50
		})
	}

	
	
	
	
	
	
	
	fs.writeFileSync(`${public}/files/${info.name}.pdf`, doc.output(), 'ascii');
 //  ossPut({name: `${info.name}.pdf`, files: `${public}/files/${info.name}.pdf`, params: req.query}).then(() => {
	// 	fs.unlinkSync(`${public}/files/${info.name}.pdf`);
	// })


	res.end(11111);
});

module.exports = router;
