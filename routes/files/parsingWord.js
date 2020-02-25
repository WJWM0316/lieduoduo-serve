var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var public = path.resolve('./public')

const textract = require('textract')

function parseWord(filePath, res) {
  let config = {
    preserveLineBreaks: true
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
      // let newArr = [],
      //     arr    = []

      // array.forEach((item, index) => {
      //   if (item.trim() === '' && arr.length) {
      //     newArr.push(arr)
      //     arr = []
      //   }
      //   if (item.trim() !== '') arr.push(item)
      // })
      // newArr.forEach((item, index) => {
      //   item.forEach((item0, index0) => {
      //     newArr[index][index0] = item0.trim().replace('\： /g', '：').split(' ')
          
      //   })
      // })
      console.log(array,  3333333333333)
      res.status(200).json({
        httpCode: 200,
        message: '导入成功',
        data: {
            result: array
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