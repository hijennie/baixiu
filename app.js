//搭建服务器
const express = require('express');
const session = require('express-session');
const router = require('./router.js');
const bodyparser = require('body-parser');
const fs = require('fs');
const app = express();
//监听端口和服务器
app.listen(8899,()=>{
    console.log('http://127.0.0.1:8899');
})

//托管静态资源
app.use('/assets',express.static('assets'));
app.use('/uploads',express.static('uploads'));

//设置默认引擎
app.set('view engine','ejs');
app.set('views','views');

app.use(bodyparser.urlencoded({ extended : false}));
app.use(bodyparser.json());
//添加session中间件
app.use(session({
    secret : 'abc',
    resave : false,
    saveUninitialized : false
}))

//添加全局路由中间件，当app每次接收到请求的时候都会触发这个中间件
app.use(function(req,res,next){
    console.log(req.url);
    //有登陆状态
    //前台页面
    //登录页面
    if(req.session.isLogin && req.session.isLogin == 'true' || req.url === '/admin/login.html' || req.url.indexOf('/admin') == -1){
        //执行下一个操作
        next()
    }else{
        res.redirect('/admin/login.html');
    }
})



//注册路由
app.use(router);