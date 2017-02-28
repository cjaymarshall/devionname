var PORT = process.env.PORT||3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var testExp = "This is a test";

//app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	res.send('App Root');
	});

//  app.get('/test', function (req, res) {
//  	res.send(testExp);
// }

http.listen(PORT, function() {
	console.log("Server started!");
});

