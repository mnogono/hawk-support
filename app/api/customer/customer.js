var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	var id = req.params.id;
	db.Customer.findById(id).then(function(customer) {
		res.send(customer);
	});
};
