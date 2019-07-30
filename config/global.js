var Node_Env = process.env.Node_Env;
console.log(Node_Env)
var nodeApi = "", // nodeJs 代理转发的域名
    qzApi   = "", // 求职端的域名
    zpApi   = "", // 招聘端的域名
    pubApi  = ""  // pub公共端域名
switch (Node_Env) {
    case 'test': // 测试
        nodeApi = "https://node.lieduoduo.ziwork.com"
        qzApi   = "https://qiuzhi-api.lieduoduo.ziwork.com"
        zpApi   = "https://zhaopin-api.lieduoduo.ziwork.com"
        pubApi  = "https://pub-api.lieduoduo.ziwork.com"
        break;
    case "preview": // 预发布
        nodeApi = "https://node.lieduoduo.com"
        qzApi   = "https://qiuzhi-api.lieduoduo.com"
        zpApi   = "https://zhaopin-api.lieduoduo.com"
        pubApi  = "https://pub-api.lieduoduo.com"
        break
    case "product": // 正式
        nodeApi = "https://node.lieduoduo.com"
        qzApi    = "https://qiuzhi-api.lieduoduo.com"
        zpApi   = "https://zhaopin-api.lieduoduo.com"
        pubApi  = "https://pub-api.lieduoduo.com"
        break
    default: // 开发环境默认测试环境
        nodeApi = "https://node.lieduoduo.ziwork.com"
        qzApi   = "https://qiuzhi-api.lieduoduo.ziwork.com"
        zpApi   = "https://zhaopin-api.lieduoduo.ziwork.com"
        pubApi  = "https://pub-api.lieduoduo.ziwork.com"
}
var GLOBALcONFIG = {
    nodeApi,
    qzApi,
    zpApi,
    pubApi
}

module.exports = GLOBALcONFIG;