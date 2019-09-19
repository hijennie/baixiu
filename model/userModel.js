// const mysql = require('mysql');
// const connection = mysql.createConnection({
//     host : '127.0.0.1',
//     user : 'root',
//     password : 'root',
//     database : 'baixiu'
// })

// module.exports = {
//     //登录按钮，根据邮箱找数据
//     login(email,callback){
//             let sql = `select * from users where email = '${email}'`;
//             connection.query(sql,(err,result)=>{
//                 err && console.log(err);
//                 callback(null,result[0]);
//             })
//     }
// }
const mysql = require('mysql');
const connection = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : 'root',
    database : 'baixiu'
})


module.exports = {
    //登录按钮，根据邮箱找数据
    login(email,callback){
            let sql = `select * from users where email = '${email}'`;
            connection.query(sql,(err,result)=>{
                err && console.log(err);
                callback(null,result[0]);
            })
    }
}