var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	console.log("customer...");
	
	var id = req.params.id;
	db.Customer.findById(id).then(function(customer) {
		console.log("CUSTOMER: " +  JSON.stringify(customer));
		res.send(customer);
	});
}