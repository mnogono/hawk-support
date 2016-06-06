var db = require(__dirname + "/../../models");
var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function(req, res) {
	fs.readFile(__dirname + "/dashboard.html", {encoding: "utf-8"}, function(err, data) {
		if (err) {
			return res.send(err.message);
		}

		db.Instrument.findAll().then(function(instruments){
			var template = handlebars.compile(data);
			var html = template({
				instruments: instruments
			});
			res.send(html);
		});			
	});		
}