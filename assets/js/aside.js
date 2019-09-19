$(function(){
    //获取当前的路由名称
    let str = location.href;
    console.log(location.href);
    let routername = '';

    let index = str.indexOf('?')
    console.log(index);
    //如果有参数
    if(index != -1){
            routername = str.substring(str.lastIndexOf('/')+1,index)

    }else{
        //如果没有参数
        routername = str.substring(str.lastIndexOf('/')+1)
    }

    let menuPorts = $('#menu-posts');
    if(routername == 'posts.html' || routername == 'post-add.html' || routername =='categories.html'){
        menuPorts.addClass('in');
        menuPorts.attr('aria-expanded',true)
        //展开的话是去除
        menuPorts.substring('a').removeClass('collapsed');
    }

    let menuSettings = $('#menu-settings');
    if(routername == 'nav-menus.html' || routername == 'slides.html' || routername == 'settings.html'){
        menuSettings.addClass('in');
        menuSettings.attr('aria-expanded',true)
        menuSettings.substring('a').removeClass('collapsed');
    }
})