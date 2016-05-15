var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	console.log("customers...");
	
	db.Customer.findAll().then(function(customers) {
		res.send(customers);
	});
}