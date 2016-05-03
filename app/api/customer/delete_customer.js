var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	var id = parseInt(req.params.id);
	db.Customer.findById(id).then(function(customer){
		customer.destroy().then(function(){
			res.send({code: 0});
		});
	});
}