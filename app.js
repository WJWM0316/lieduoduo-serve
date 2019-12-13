var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var frontEndRoute = require('./routes/frontEnd/index.js');
var canvasRoute = require('./routes/canvas/index.js');

var files = require('./routes/files/index.js');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/frontEnd', canvasRoute);
app.use('/frontEnd', frontEndRoute);
app.use('/frontEnd', files);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//拦截器允许跨域
app.all("*", function(req,res,next){
    if(	 req.headers.origin.toLowerCase() === "http://www.lieduoduo.com"
			|| req.headers.origin.toLowerCase() === "http://www.lieduoduo.ziwork.com"
			|| req.headers.origin.toLowerCase() === "http://h5.lieduoduo.com"
			|| req.headers.origin.toLowerCase() === "http://h5.lieduoduo.ziwork.com"
			|| req.headers.origin.toLowerCase() === "http://m.lieduoduo.com"
			|| req.headers.origin.toLowerCase() === "http://m.lieduoduo.ziwork.com"
			) {
			//设置允许跨域的域名，*代表允许任意域名跨域
			res.header("Access-Control-Allow-Origin", req.headers.origin);
		}
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options') {
			res.send(200);  //让options尝试请求快速结束
		} else {
			next();
		}
})
module.exports = app;
