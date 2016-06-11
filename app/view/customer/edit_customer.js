var db = require(__dirname + "/../../models");
var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function(req, res) {
	fs.readFile(__dirname + "/customer.html", {encoding: "utf-8"}, function(err, data) {
		if (err) {
			return res.send(err.message);
		}
		var id = parseInt(req.params.id);
		db.Customer.findById(id).then(function(customer){
			var template = handlebars.compile(data);
			var html = template({
                customer: customer
            });
			res.send(html);
		});
	});
};
