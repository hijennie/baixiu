const express = require('express');
const router = express.Router();
const pagesController = require('./controllers/pagesController');
const usersController = require('./controllers/usersController.js');

//请求主页
// router.get('/',(req,res)=>{
//     //读取文件直接返回
//     // fs.readFile(__dirname + '/views/index.html',(err,data)=>{
//     //     err && console.log(err);
//     //     res.end(data);
//     pagesController.getIndexPage(req,res);
//     })


    //读取前台页面
    router.get('/index.html',pagesController.getIndexPage)
        .get('/detail.html',pagesController.getDetailPage)
        .get('/list.html',pagesController.getListPage)


    //下面的路由是读取后台页面
         .get('/admin/index.html',pagesController.getAdminIndexPage)
         .get('/admin/categories.html',pagesController.getAdminCategoriesPage)
         .get('/admin/comments.html',pagesController.getAdminCommentsPage)
         .get('/admin/login.html',pagesController.getAdminLoginPage)
         .get('/admin/nav-menus.html',pagesController.getAdminNavMenusPage)
         .get('/admin/password-reset.html',pagesController.getAdminPasswordResetPage)
         .get('/admin/post-add.html',pagesController.getAdminPostAddPage)
         .get('/admin/posts.html',pagesController.getAdminPostsPage)
         .get('/admin/profile.html',pagesController.getAdminProfilePage)
         .get('/admin/settings.html',pagesController.getAdminSettingsPage)
         .get('/admin/slides.html',pagesController.getAdminSlidesPage)
         .get('/admin/users.html',pagesController.getAdminUsersPage)

         
    //下面的路由是业务处理
    //登录按钮请求的接口
    .post('/login',usersController.login)

    module.exports= router;
