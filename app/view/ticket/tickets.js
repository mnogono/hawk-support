var db = require(__dirname + "/../../models");
var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function(req, res) {
	fs.readFile(__dirname + "/tickets.html", {encoding: "utf-8"}, function(err, data) {
		if (err) {
			return res.send(err.message);
		}
		
		db.Ticket.findAll().then(function(tickets){
			var template = handlebars.compile(data);
			var html = template({
				tickets: tickets
			});
			res.send(html);
		});
	});		
}