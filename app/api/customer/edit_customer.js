var merge = require("merge");
var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	var id = parseInt(req.params.id);
	var data = req.body.customer;

	db.Customer.findById(id).then(function(customer){
		customer = merge(instrument, data);
		customer.save();
		res.send({code: 0});
	});
}