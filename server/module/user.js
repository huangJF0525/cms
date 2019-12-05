function getUser(req,resp){
    resp.end("我是用户模块")
}
function addUser(req,resp){
    resp.end("添加用户")
}
function deleteUser(req,resp){
    resp.end("删除用户")
}

exports.getUser=getUser;
exports.addUser=addUser;
exports.deleteUser=deleteUser;