var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	console.log("deleted ticket by id: " + req.params.id);
	db.Ticket.findById(req.params.id).then(function(ticket){
		ticket.destroy().then(function(){
			console.log("ticket deleted");
			res.send({code: 0});
		});
	});
	/*
	db.Ticket.create({
		name: req.body.ticket.name,
		comment: req.body.ticket.comment
	}).then(function() {
		res.send("ok");
	});
	*/
}