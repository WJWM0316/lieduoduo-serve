const express = require('express');
const router = express.Router();
const path = require('path')
const puppeteer = require('puppeteer-core');
const { 'iPhone X': deviceModel } = require('puppeteer-core/DeviceDescriptors');
const request = require('request-promise-native');

// ws://127.0.0.1:9222/devtools/browser/b83498c7-c449-409f-800a-08603659b0b9

// 渲染HTML
router.get('/render', async(req, res, next) => {
    res.sendfile(path.resolve('./public/html-to-png/poster/1.html'))
})

router.get('/pngs', async(req, res, next) => {
    let { browserWSEndpoint } = await request({
        uri:  "http://127.0.0.1:3100/json/version",
        json: true
    });
    let browser = await puppeteer.connect({
        ignoreHTTPSErrors: true,
        browserWSEndpoint
    });
    const page = await browser.newPage();
    // 模拟一个 iPhone X
    await page.emulate(deviceModel);
    // await page.setViewport({ width: 375, height: 812 });
    await page.goto('https://juejin.im/post/5d5f40c5e51d456213203129#heading-6');
    let results = await page.screenshot({
        type: 'png',
        encoding: 'base64',
    });
    await page.close();
    res.render('index', {
        title:'study book',
        jpeg:`data:image/png;base64,${results}` ,
        description:'照片墙'
    })
})

module.exports = router;