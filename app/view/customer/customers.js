var db = require(__dirname + "/../../models");
var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function(req, res) {
	fs.readFile(__dirname + "/customers.html", {encoding: "utf-8"}, function(err, data) {
		if (err) {
			return res.send(err.message);
		}

		db.Customer.findAll().then(function(customers){
			var template = handlebars.compile(data);
			var html = template({
				customers: customers
			});
			res.send(html);
		});			
	});		
}