// 모듈을 추출
// express는 웹서버 역할
var express = require('express');
// 폼에 입력한 부분을 받아서 처리할 때 쓰는 body-parser
var bodyParser = require('body-parser');
// mysql 서버와 연동(드라이버 역할)
var mysql = require('mysql');

//  데이터베이스와 연결
var client = mysql.createConnection({
    user : 'root',
    password: '1234',
    database: 'Company'
});

// 웹 서버를 생성합니다.
var app = express();
app.use(express.static('public')); //public 폴더 인식. 사용가능
app.use(bodyParser.urlencoded({ extended : false}));

app.get('/products', function(request, response){
    //데이터베이스 요청 수행
    client.query('SELECT * FROM products', function (error, data){
        console.log(data);
        response.send(data);
    });
});
app.post('/products', function(request, response){
    //변수를 선언
    var name = request.body.name;
    var modelnumber = request.body.modelnumber;
    var series = request.body.series;

    console.log(name);
    console.log(modelnumber);
    console.log(series);

    //데이터베이스 요청을 수행합니다.
    client.query('INSERT INTO products (name, modelnumber, series) VALUES(?,?,?)', [
        name, modelnumber, series
    ], function (error, data){
        console.log(data);
        response.send(data);
    }); 
});

app.listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});
