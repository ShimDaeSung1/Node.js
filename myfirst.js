// 웹 서버 역할(http)
var http=require("http");
var dt = require("./myfirstmodule");
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("현재 날짜 : "+dt.myDateTime());
})
.listen(8181);