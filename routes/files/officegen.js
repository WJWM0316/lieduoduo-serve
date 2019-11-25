var fs = require('fs');
var express = require('express');
var router = express.Router();
var path = require('path');
var public = path.resolve('./public')
var httpRequest = require('../../config/httpRequest.js')
var filesPocessor = require('../../utils/filesPocessor.js')

const officegen = require('officegen')

router.get('/word', async function(req, res, next) {
	// Create an empty Word object:
	let docx = officegen('docx')
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
	let info  = data.data
	// Officegen calling this function after finishing to generate the docx document:
	docx.on('finalize', function(written) {
	  console.log(
	    'Finish to create a Microsoft Word document.'
	  )
	})
	
	// Officegen calling this function to report errors:
	docx.on('error', function(err) {
	  console.log(err)
	})
	
	let h1 = {color: '333333', bold: true, font_size: 26},
			h2 = {color: '333333', bold: true, font_size: 16}
	
	
	
	// Create a new paragraph:
	let pObj = docx.createP()
	let addImage = async (files) => {
		var avatorBase64 = await filesPocessor.loadImageFile(files)
		var dataBuffer = Buffer.from(avatorBase64, 'base64');
		let path = `${public}/files/${info.name}.jpg`
		fs.writeFileSync(path, dataBuffer)
		pObj.addImage(path, {cx: 100, cy: 100})
	}
	// addImage(info.avatar.smallUrl)
	pObj.addImage(`${public}/files/${info.name}.jpg`, {cx: 54, cy: 54})
	pObj.addText(info.name, h1)
	pObj.addText(' with color', { color: '000088' })
	pObj.addText(' and back color.', { color: '00ffff', back: '000088' })
	


	
	let out = fs.createWriteStream(`${public}/files/${info.name}.docx`)
	
	out.on('error', function(err) {
	  console.log(err)
	})
	
	// Async call to generate the output file:
	docx.generate(out)
	res.json(111111111111)
	
})

module.exports = router;