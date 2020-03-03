var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var public = path.resolve('./public')

const textract = require('textract')

function parseWord(filePath, res) {
  let suffix = filePath.split('.')[filePath.split('.').length - 1]
  let config = {}
  switch (suffix) {
    case 'docx':
      config.preserveLineBreaks = true
      config.preserveOnlyMultipleLineBreaks = true
      break
    case 'doc':
      config.preserveLineBreaks = true
      break
    case 'pdf':
      config.preserveOnlyMultipleLineBreaks = true
      break
  }
  textract.fromFileWithPath(filePath, config, function (error, text) {
    if (error) {
    	console.log(error, 111111111111111)
      res.status(200).json({
        httpCode: 200,
        message: '导入解析失败',
        data: error,
        returnValue: 0
      });
    } else {
      let array = text.trim().replace(/[\r\n]/g, '<br>').split('<br>')
      let newArr = []
      switch (suffix) {
        case 'docx':
          array.forEach((item, index) => {
            newArr = newArr.concat(item.trim().split('"'))
          })
          break
        case 'pdf':
          newArr = text
          // array.forEach((item, index) => {
          //   newArr = newArr.concat(item.trim().split(" "))
          // })
          break
        case 'doc':
          newArr = text
          // array.forEach((item, index) => {
          //   newArr = newArr.concat(item.trim().split('"'))
          // })
          break
      }
     
      res.status(200).json({
        httpCode: 200,
        message: '导入成功',
        data: {
            result: text
        },
        returnValue: 1
      });
    }
  })
}


router.get('/parsingWord', async function(req, res, next) {
	parseWord(`${public}/files/${req.query.fileName}`, res)
})

module.exports = router;