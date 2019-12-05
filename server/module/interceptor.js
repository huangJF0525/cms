//拦截器模块
//get类型的请求参数格式化
const url=require("url");
//post类型的请求参数格式化
const querystring=require("querystring")

//系统拦截
function intercept(req,resp,callback){
    //请求地址
    reqUrl=url.parse(req.url)
    let uri=reqUrl.pathname;
    console.log("[interceptor]request path"+uri)
    if(uri==="/favicon.ico"){
        console.log("[fnode-warning]/favicon.ico request");
        resp.end();
        return;
    }
    //请求入参
    let query=null;
    let method=req.method;
    console.log("[interceptor]request method"+method)
    if(method==="GET"){
        query=reqUrl.query;
        printRequestParam(query,callback);
    }else if(method==="POST"){
        var reqbody="";
        req.on("data",function(chunk){
            reqbody+=chunk;
        })
        req.on("end",function(){
            if(reqbody){
                //将post请求参数字符串转成json对象
                query=querystring.parse(reqbody)
            }
            console.log("post数据："+ reqbody)
            printRequestParam(query,callback);
        })
    }

}
function printRequestParam(query,req,resp,callback){
    if(query){
        console.log("[interceptor]request param:"+JSON.stringify(query))
    }
    if(callback){
        callback(req,resp)
    }
    return true
}

module.exports={intercept}