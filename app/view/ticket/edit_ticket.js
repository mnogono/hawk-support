var db = require(__dirname + "/../../models");
var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function(req, res) {
	fs.readFile(__dirname + "/edit_ticket.html", {encoding: "utf-8"}, function(err, data) {
		if (err) {
			return res.send(err.message);
		}
		db.Instrument.findAll()
		.then(function(instruments){
			var id = parseInt(req.params.id);
			db.Ticket.findById(id).then(function(ticket){
				var template = handlebars.compile(data);
				var html = template({
					ticket: ticket,
					instruments: instruments
				});
				res.send(html);
			});			
		});
	});
}