var fs = require("fs");

module.exports = function(req, res) {
	fs.readFile(__dirname + "/create_ticket.html", {encoding: "utf-8"}, function(err, data) {
		if (err) {
			return res.send(err.message);
		}
		res.send(data);
	});
}

/*
var handlebars = require("handlebars");
var fs = require("fs");
var app = require(__dirname + "./../main.js");

debugger;

console.log(__dirname + "./../main.js");

console.log(app);

function ticket(req, res) {
	
	
	app.db.Ticket.findAll.then(function(data) {
		console.log("create_ticket.js");
	});
	res.send("asdasdasd");
}

module.exports = ticket;
*/