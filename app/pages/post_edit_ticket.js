var db = require(__dirname + "/../models");

module.exports = function(req, res) {
	var id = req.body.ticket.id;
	db.Ticket.findById(id).then(function(ticket) {
		ticket.name = req.body.ticket.name;
		ticket.comment = req.body.ticket.comment;
		ticket.save().then(function(){
			res.redirect("/edit_ticket?id="+ticket.id);	
		});
	});
}


