//引入核心模块
const url = require("url");
//引入自定义路由模块
const user=require("./user");
//引入自定义核心模块
const interceptor=require("./interceptor")



function dispatcher(req,resp){
    if(!interceptor.intercept(req,resp,dealBiz)){
    }



}

function dealBiz(req,resp){
    let uri=url.parse(req.url).pathname;
    switch(uri){
        case "/favicon.ico":
            resp.end();
            break;
        case "/getUser":
            user.getUser(req,resp);
            break;
        case "/addUser":
            user.addUser(req,resp);
            break;
        case "/deleteUser":
            user.deleteUser(req,resp);
            break;
        default:
            resp.end("say goodbye")
            break
    }
}
module.exports={dispatcher}