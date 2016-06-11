var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
    console.log("create customer...");

	db.Customer.create(req.body.customer).then(function() {
		res.send({code: 0});
	});
};
