var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	db.Ticket.findAll().then(function(tickets) {
		res.send(tickets);
	});
}