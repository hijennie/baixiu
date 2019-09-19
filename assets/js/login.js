
// $(function(){
//     $('.btn').on('click',function(){
//         $.ajax({
//             type:'post',
//             url:'/login',
//             // serialize:可以收集当前指定的表单中所有拥有name属性的表单元素的value值
//             data : $('form').serialize(),
//             dataType:'json',
//             success : function(res){
//                 // console.log(res);
//                 // console.log(111111111)
//                 console.log( $('form').serialize());
//                 if(res.code == 200){
//                     location.href = '/admin/index.html';
//                 }
//             }
//         })
//     }) 
// })

//点击登录按钮，在登录页面注册点击事件
$(function(){
    //给按钮注册点击事件
    $('.btn').on('click',function(){
        //发送ajax请求
        $.ajax({
            type : 'post',
            url : '/login',
            data : $('form').serialize(),
            dataType : 'json',
            success : function(res){
                if(res.code == 200){
                    location.href = '/admin/index.html';
                }
            }
        })
    })
})