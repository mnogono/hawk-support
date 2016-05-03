var merge = require("merge");
var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	var id = parseInt(req.params.id);
	var data = req.body.ticket;
	console.log("data = " + JSON.stringify(data));

	db.Ticket.findById(id).then(function(ticket){
		for (var p in data) {
			if (data[p] === "NULL") {
				data[p] = null;
			}
		}
		ticket = merge(ticket, data);
		ticket.save();
		res.send({code: 0});
	});
}