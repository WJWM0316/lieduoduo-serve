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
      // config.preserveOnlyMultipleLineBreaks = true
      break
    case 'doc':
      config.preserveLineBreaks = true
      break
    case 'pdf':
      config.preserveLineBreaks = true
      config.layout = 'raw'
      config.pdftotextOption = {
        layout: 'raw'
      }
      break
  }
  let action = (error, text) => {
    if (error) {
      res.status(200).json({
        httpCode: 200,
        message: '导入解析失败',
        data: error,
        returnValue: 0
      });
      console.log(error, 222)
    } else {
      let array = text.trim().replace(/[\r\n]/g, '<br>').split('<br>')
      res.status(200).json({
        httpCode: 200,
        message: '导入成功',
        data: {
          result: array
        },
        returnValue: 1
      });
    }
  }
  textract.fromUrl(filePath, config, function (error, text) {
    action(error, text)
  })
}


router.get('/parsingWord', async function(req, res, next) {
	parseWord(decodeURIComponent(req.query.filePath), res)
})

module.exports = router;