var http = require('http');
var bodyParser= require('body-parser');
var express= require('express');
var uniqid = require('uniqid');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app= express();


app.get('/', function (req, res) {
	res.writeHead(200, {'Content-Type': 'application/json'});
    res.write('Hello World');
})


app.get('/register',urlencodedParser,function(req,res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	var uid=uniqid();
	var obj = {'uid' : uid };
	res.write(JSON.stringify(obj));
	//insert id
    //fetch uid
})

app.get('/getpartner',urlencodedParser,function(req,res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	var uid='uid of partner';
	var obj={'uid': uid};
	res.write(JSON.stringify(obj));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})