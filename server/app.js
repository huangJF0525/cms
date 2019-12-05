const http=require("http");
const url=require("url");
//引入自定义路由
const router=require("./module/router")
var server=http.createServer(function(req,resp){
    router.dispatcher(req,resp);
    //uri
    //每次请求一定要有一个响应，如果没有，请求不会失败，会卡住一直刷新
    resp.end("11111");
})
server.listen(80,function(){
    console.log("服务启动了");
    
})