const express = require('express');
const router = express.Router();
const puppeteer = require('puppeteer-core');
const { 'iPhone 6': deviceModel } = require('puppeteer-core/DeviceDescriptors');
const request = require('request-promise-native');
const qs = require('qs')

const BaseURL= process.env.NODE_ENV === 'dev' ? 'http://node.lieduoduo.ziwork.com' : process.env.NODE_ENV === 'pro' ? 'http://node.lieduoduo.com' : 'http://127.0.0.1:3000'
const RenderConfing = {
    'hot_position': {
        url: 'frontEnd/s-hot-position',
        isDevice: false,
        viewport: {
            width: 750,
            height: 1180
        }
    },
    'position': {
        url: 'frontEnd/s-position',
        isDevice: true
    },
    'recruiter': {
        url: 'frontEnd/s-recruiter',
        isDevice: true
    },
    'resume': {
        url: 'frontEnd/s-resume',
        isDevice: true
    }
}
// /frontEnd/pngs?type=hot_position&id=7408&token=e822e1acafea2111af2a009e1ab4eab1
// /frontEnd/pngs?type=position&id=449&token=e822e1acafea2111af2a009e1ab4eab1
// /frontEnd/pngs?type=recruiter&id=1635&token=e822e1acafea2111af2a009e1ab4eab1
// /frontEnd/pngs?type=resume&id=1211&token=e822e1acafea2111af2a009e1ab4eab1

router.get('/position', (req, res, next) => {
    console.log(req.headers, 222)
    req.query = {...req.query, type: 'position'}
    middle(req, res, next)
})
router.get('/position_min', (req, res, next) => {
    req.query = {...req.query, type: 'hot_position'}
    middle(req, res, next)
    // res.redirect(`/frontEnd/pngs?${qs.stringify(query)}`)
})
router.get('/recruiter', async (req, res, next) => {
    const id = req.query.uid || req.query.id
    req.query = {...req.query, id, type: 'recruiter'}
    await middle(req, res, next)
    // res.redirect(`/frontEnd/pngs?${qs.stringify(query)}`)
})
router.get('/resume', (req, res, next) => {
    const id = req.query.uid || req.query.id
    req.query = {...req.query, id, type: 'resume'}
    middle(req, res, next)
    // res.redirect(`/frontEnd/pngs?${qs.stringify(query)}`)
})


const middle =  async(req, res, next) => {
    if (!req.query.token) req.query.token = req.headers['authorization'] ? req.headers['authorization'] : req.headers['authorization-app']
    const {type} = req.query
    const config = RenderConfing[type]
    if(!(type && config)) {
        return res.json({httpStatus: 400, msg: '参数错误'})
    }
    let version = await request({
        uri:  "http://127.0.0.1:3100/json/version",
        json: true
    });
    let browser = await puppeteer.connect({
        ignoreHTTPSErrors: true,
        browserWSEndpoint: version.webSocketDebuggerUrl
    });
    const page = await browser.newPage();
    // 是否使用设备模拟器
    if(config.isDevice) {
        await page.emulate(deviceModel);
    } else {
        await page.setViewport({ width: 750, height: 1180 });
    }
    await page.goto(`${BaseURL}/${config.url}?${qs.stringify(req.query)}`);
    let results = await page.screenshot({
        type: 'png',
        encoding: 'base64',
        fullPage: true
    });
    await page.close();
    await browser.disconnect()
    // res.render('index', {
    //     title:'study book',
    //     jpeg:`data:image/png;base64,${results}` ,
    //     description:'照片墙'
    // })
    res.json({
        httpStatus: 200,
        data: {
            url: `data:image/png;base64,${results}`
        }
    })
}

// 关闭浏览器内所有标签页
router.put('/browser/close', async (req, res, next) => {
    let version = await request({
        uri:  "http://127.0.0.1:3100/json/version",
        json: true
    });
    let browser = await puppeteer.connect({
        ignoreHTTPSErrors: true,
        browserWSEndpoint: version.webSocketDebuggerUrl
    });
    const pages = await browser.pages()
    for(let i= 0; i < pages.length; i ++) {
        await pages[i].close()
    }
    res.json({httpStatus: 200})
})

module.exports = router;