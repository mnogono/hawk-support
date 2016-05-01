var express = require("express");
var app = express();

console.log("asd");

app.get("/pages/customers", function(req, res) {
	/*
	connection.query("SELECT * from user", function(err, rows, fields) {
		if (!err) {
			console.log("The solution is: ", rows);
		} else {
			console.log("Error while performing query.");
		}
		res.send("Hello World");
	})
	*/
	//connection.end();
	
	res.send("customers");
});