var NODE_ENV = process.env.NODE_ENV;
var nodeApi = "", // nodeJs 代理转发的域名
    qzApi   = "", // 求职端的域名
    zpApi   = "", // 招聘端的域名
    pubApi  = ""  // pub公共端域名
switch (NODE_ENV) {
    case 'dev': // 测试
        nodeApi = "http://192.168.5.159:3000"
        qzApi   = "https://qiuzhi-api.lieduoduo.ziwork.com"
        zpApi   = "https://zhaopin-api.lieduoduo.ziwork.com"
        pubApi  = "https://pub-api.lieduoduo.ziwork.com"
        webHost = "https://h5.lieduoduo.ziwork.com"
        break;
    case 'pre': // 预发布
        nodeApi = "https://node.lieduoduo.com"
        qzApi   = "https://qiuzhi-api.lieduoduo.com"
        zpApi   = "https://zhaopin-api.lieduoduo.com"
        pubApi  = "https://pub-api.lieduoduo.com"
        webHost = "https://h5.lieduoduo.com"
        break
    case 'pro': // 正式
        nodeApi = "https://node.lieduoduo.com"
        qzApi    = "https://qiuzhi-api.lieduoduo.com"
        zpApi   = "https://zhaopin-api.lieduoduo.com"
        pubApi  = "https://pub-api.lieduoduo.com"
        webHost = "https://h5.lieduoduo.com"
        break
    default: // 开发环境默认测试环境
        nodeApi = "http://192.168.5.159:3000"
        qzApi   = "https://qiuzhi-api.lieduoduo.ziwork.com"
        zpApi   = "https://zhaopin-api.lieduoduo.ziwork.com"
        pubApi  = "https://pub-api.lieduoduo.ziwork.com"
        webHost = "https://h5.lieduoduo.ziwork.com"
}
var GLOBALcONFIG = {
    nodeApi,
    qzApi,
    zpApi,
    pubApi,
    webHost
}

module.exports = GLOBALcONFIG;