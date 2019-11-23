const oss = require('ali-oss');
let store = null,
		options = null
module.exports = ossPut = async function ({name, files, params}) {
	if (params) {
		store = oss({
			//云账号AccessKey有所有API访问权限，建议遵循阿里云安全最佳实践，部署在服务端使用RAM子账号或STS，部署在客户端使用STS。
		  accessKeyId: params.accessKeyId,
		  accessKeySecret: params.accessKeySecret,
		  bucket: params.bucket,
		  region: params.region,
			stsToken: params.stsToken
		})
		if (params.private) store.putBucketACL('lieduoduo-uploads-test', 'Private');
		options = {
		  callback: {
		    // 您的回调服务器地址，如http://oss-demo.aliyuncs.com:23450或http://127.0.0.1:9090。
		    url: params.url,
		    // 设置回调请求消息头中Host的值，如oss-cn-hangzhou.aliyuncs.com。
		    host: params.host,
		    // 设置发起回调请求的Content-Type。
		    body: params.body,
		    contentType: params.contentType
		  }
		}
	}
	var date  = new Date(),
			year  = date.getFullYear(),
			month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1,
			day   = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate() 
	try {
		let result = await store.put(`/${year}/${month}${day}/${name}`, files, options)
		console.log(result);
	} catch (err) {
		console.log ('失败', err);
	}
}


