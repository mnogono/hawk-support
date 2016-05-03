var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	console.log(req.body.ticket);
	
	db.Ticket.create({
		name: req.body.ticket.name,
		comment: req.body.ticket.comment
	}).then(function() {
		res.send({code: 0});
	});
}