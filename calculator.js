const express = require("express");

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 3000


app.get("/", function(req, res){
	res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

//  Convert to interger using the parseInt or unary operator ( + _)
// Using the Number Constructor or 
// var num1 = Number(req.body.num1);
// var num2 = Number(req.body.num2);

var number1 = parseFloat(req.body.number1);
var number2 = parseFloat(req.body.number2);
var operator = (req.body.operator);

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);

console.log(result);

	res.send("Your result is: " + result);
});

app.listen(port, function(){
	console.log("Server started on port 3000");
});


