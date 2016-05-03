var db = require(__dirname + "/../../models");
var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function(req, res) {
	fs.readFile(__dirname + "/edit_instrument.html", {encoding: "utf-8"}, function(err, data) {
		if (err) {
			return res.send(err.message);
		}
		var id = parseInt(req.params.id);
		console.log("id = " + id);
		db.Instrument.findById(id).then(function(instrument){
			console.log(JSON.stringify(instrument));
			
			var template = handlebars.compile(data);
			var html = template(instrument);
			res.send(html);
		});
	});		
}