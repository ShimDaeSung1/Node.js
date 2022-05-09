// 모듈을 추출
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

//  데이터베이스와 연결
// var client = mysql.createConnection({
//     user : '',
//     password: '',
//     database: ''
// });

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
