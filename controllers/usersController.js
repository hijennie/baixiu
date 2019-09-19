const userModel = require('../model/userModel.js');

module.exports = {
    //登录页面按钮登录
    login(req,res){
        //收集数据
        var obj = req.body;
        //调用邮箱，找出数据
        userModel.login(obj.email,(err,result)=>{
            if(err){
                res.json({ code : 500 , msg : '服务器异常'});
            }else{
                //没有err，判断是否有该邮箱
                if(result){
                    //判断密码是否正确
                    if(result.password === obj.password){
                        //密码正确，登录成功
                        req.session.isLogin = 'true';
                        res.json({ code : 200, msg : '登录成功'})
                    }else{
                        //密码错误
                        res.json({ code : 500 , msg : '密码错误'})
                    }
                }else{
                    //邮箱错误
                    res.json({ code : 500 ,msg : '邮箱错误'})
                }
            }
        })
    }
}








// module.exports={
//     //处理登录页面的登录按钮
//     login(req,res){
//         //收集数据
//         var obj = req.body;
//         console.log(obj);
//         //调用邮箱，找出数据
//         userModel.login(obj.email,(err,result)=>{
//             if(err){
//                 res.json({ code : 500 , msg : '服务器异常'})
//             }else{
//                 if(result){
//                     //邮箱正确，判断密码
//                     if(result.password === obj.password){
//                         //set-cookie
//                         //如果密码正确，就在响应头写入cookie
//                         // res.writeHead(200,{
//                         //     'Set-Cookie':'isLogin=true'
//                         // }),
//                         //登录成功之后,修改session属性
//                         req.session.login = 'true';
//                         // res.end(JSON.stringify({
//                         //     code : 200,
//                         //     msg : '登陆成功'
//                         // }))

//                         res.json({ code : 200, msg : '登录成功'})
//                     }else{
//                         res.json({ code : 400, msg : '密码错误'})
//                     }
//                 }else{
//                     //邮箱错误
//                     res.json({ code : 400 , msg : '邮箱错误'})
//                 }
//             }

//         })

//     },

// }