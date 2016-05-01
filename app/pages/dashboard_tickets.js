var db = require(__dirname + "/../models");
var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function(req, res) {
	console.log("start reading dashboard_tickets.html");
	console.log(__dirname + "\\dashboard_tickets.html");
	fs.readFile(__dirname + "\\dashboard_tickets.html", "utf-8", function(err, source){
		if (err) {
			res.send(err);
		}
		
		db.Ticket.findAll().then(function(data) {
			var template = handlebars.compile(source);
			var html = template({
				tickets: data
			});
			res.send(html);
		});
	});
}