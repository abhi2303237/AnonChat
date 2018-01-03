var http = require('http');
var bodyParser= require('body-parser');
var express= require('express');
var uniqid = require('uniqid');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app= express();

//////////////////Database connection//////////////////////

// var mysql = require('mysql')
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'dbuser',
//   password : 's3kreee7',
//   database : 'my_db'
// });

// connection.connect()

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()

///////////////////////////////////////////////////////////////////
/////////////////////Hello World///////////////////////////////////

app.get('/', function (req, res) {
	res.writeHead(200, {'Content-Type': 'application/json'});
    res.write('Hello World');
})
//////////////////////////////////////////////////////////////////
/////////////////////Get Uid//////////////////////////////////////

app.get('/register',urlencodedParser,function(req,res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	var uid=uniqid();
	var obj = {'uid' : uid };
	res.write(JSON.stringify(obj));
	//insert id
    //fetch uid
})
//////////////////////////////////////////////////////////////////
////////////////////Get Partner///////////////////////////////////
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