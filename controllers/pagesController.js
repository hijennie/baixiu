//这个文件是处理直接返回一个页面的
const querystring = require('querystring');


module.exports = {
    //请求主页
    getIndexPage(req,res){
        //直接返回主页
        res.render('index.ejs');
    },
    getDetailPage(req,res){
        res.render('detail.ejs');
    },
    getListPage(req,res){
        res.render('list.ejs');
    },
    

    //读取后台页面
    getAdminIndexPage(req,res){
        // if(req.session.isLogin  && req.session.isLogin == 'true'){
        //     res.render('admin/index.ejs');
        // }else{
        //     res.redirect('/login.html');
        // }
        // if(req.session.isLogin && req.session.isLogin == 'true'){
            res.render('admin/index.ejs');
        // }else{
            // res.redirect('admin/login.html');
        // }
       
    },
    getAdminCategoriesPage(req,res){
        res.render('admin/categories.ejs');
    },
    getAdminCommentsPage(req,res){
        res.render('admin/comments.ejs');
    },
    getAdminLoginPage(req,res){
        res.render('admin/login.ejs')
    },
    getAdminNavMenusPage(req,res){
        res.render('admin/nav-menus.ejs')
    },
    getAdminPasswordResetPage(req,res){
        res.render('admin/password-reset.ejs');
    },
    getAdminPostAddPage(req,res){
        res.render('admin/post-add.ejs')
    },
    getAdminPostsPage(req,res){
        res.render('admin/posts.ejs')
    },
    getAdminProfilePage(req,res){
        res.render('admin/profile.ejs')
    },
    getAdminSettingsPage(req,res){
        res.render('admin/settings.ejs')
    },
    getAdminSlidesPage(req,res){
        res.render('admin/slides.ejs')
    },
    getAdminUsersPage(req,res){
        res.render('admin/users.ejs')
    }
}