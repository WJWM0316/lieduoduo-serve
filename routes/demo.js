var fs = require('fs');
var express = require('express');
var router = express.Router();
var path = require('path');
var public = path.resolve('./public')
var ossPut = require('../api/common.js');
global.window = {document: {createElementNS: () => {return {}} }};
global.navigator = {};
global.html2pdf = {};
global.btoa = () => {};

var myfont = require(public + '/font/NotoSansCJKjp.js')
var jsPDF = require('jspdf');
global.jsPDF = jsPDF
// require(public + '/javascripts/jspdf.customfonts.min.js');

// require(public + '/font/pingfangsc-normal.js')

/* GET users listing. */
router.get('/test', function(req, res, next) {
  var doc = new jsPDF({orientation: 'p', unit: 'px', format: [2479, 3508], putOnlyUsedFonts: true});
  

  doc.addFileToVFS(public + '/font/NotoSansCJKtc-Regular.ttf', myfont);
  doc.addFont(public + '/font/NotoSansCJKtc-Regular.ttf', 'myfont', 'normal');

  doc.setFont('myfont'); // set font
  doc.setFontSize(60);
    
  let text = '测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa'
  doc.text(text, 10, 10, {maxWidth: 100, baseline: 'top'});
  var data = doc.output();
  console.log(2222222222222222)
  fs.writeFileSync(public + '/files/document.pdf', data);
  // ossPut({name: '/2018/ceshi.pdf', files: public + '/files/document.pdf'})
  // fs.unlinkSync(public + '/files/document.pdf');
  // 
  // 
  console.log(33333444)
});

module.exports = router;var fs = require('fs');
var express = require('express');
var router = express.Router();
var path = require('path');
var public = path.resolve('./public')
var ossPut = require('../api/common.js');
global.window = {document: {createElementNS: () => {return {}} }};
global.navigator = {};
global.html2pdf = {};
global.btoa = () => {};

var myfont = require(public + '/font/NotoSansCJKjp.js')
var jsPDF = require('jspdf');
global.jsPDF = jsPDF
// require(public + '/javascripts/jspdf.customfonts.min.js');

// require(public + '/font/pingfangsc-normal.js')

/* GET users listing. */
router.get('/test', function(req, res, next) {
  var doc = new jsPDF({orientation: 'p', unit: 'px', format: [2479, 3508], putOnlyUsedFonts: true});
  

  doc.addFileToVFS(public + '/font/NotoSansCJKtc-Regular.ttf', myfont);
  doc.addFont(public + '/font/NotoSansCJKtc-Regular.ttf', 'myfont', 'normal');

  doc.setFont('myfont'); // set font
  doc.setFontSize(60);
    
  let text = '测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa'
  doc.text(text, 10, 10, {maxWidth: 100, baseline: 'top'});
  var data = doc.output();
  console.log(2222222222222222)
  fs.writeFileSync(public + '/files/document.pdf', data);
  // ossPut({name: '/2018/ceshi.pdf', files: public + '/files/document.pdf'})
  // fs.unlinkSync(public + '/files/document.pdf');
  // 
  // 
  console.log(33333444)
});

module.exports = router;var fs = require('fs');
var express = require('express');
var router = express.Router();
var path = require('path');
var public = path.resolve('./public')
var ossPut = require('../api/common.js');
global.window = {document: {createElementNS: () => {return {}} }};
global.navigator = {};
global.html2pdf = {};
global.btoa = () => {};

var myfont = require(public + '/font/NotoSansCJKjp.js')
var jsPDF = require('jspdf');
global.jsPDF = jsPDF
// require(public + '/javascripts/jspdf.customfonts.min.js');

// require(public + '/font/pingfangsc-normal.js')

/* GET users listing. */
router.get('/test', function(req, res, next) {
  var doc = new jsPDF({orientation: 'p', unit: 'px', format: [2479, 3508], putOnlyUsedFonts: true});
  

  doc.addFileToVFS(public + '/font/NotoSansCJKtc-Regular.ttf', myfont);
  doc.addFont(public + '/font/NotoSansCJKtc-Regular.ttf', 'myfont', 'normal');

  doc.setFont('myfont'); // set font
  doc.setFontSize(60);
    
  let text = '测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa测试看看aa'
  doc.text(text, 0, 0, {maxWidth: 500, baseline: 'top'});
  var data = doc.output();
  console.log(2222222222222222)
  fs.writeFileSync(public + '/files/document.pdf', data);
  // ossPut({name: '/2018/ceshi.pdf', files: public + '/files/document.pdf'})
  // fs.unlinkSync(public + '/files/document.pdf');
  // 
  // 
  console.log(33333444)
});

module.exports = router;