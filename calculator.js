const express = require("express");

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
	res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
// console.log(req.body);

//  Convert to interger using the parseInt
// var num1 = parseInt(req.body.num1);
// var num2 = parseInt(req.body.num2);

// Using the Number Constructor
// var num1 = Number(req.body.num1);
// var num2 = Number(req.body.num2);

// convert to interger using the unary + operator
var num1 = +(req.body.num1);
var num2 = +(req.body.num2);

var results = num1 + num2;


var sub1 = +(req.body.sub1);
var sub2 = +(req.body.sub2);

var results = sub1 - sub2;

console.log(results);

	res.send("Your result is: " + results);
});

app.listen(3000, function(){
	console.log("Server started on port 3000");
});