var db = require(__dirname + "/../../models");
var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function(req, res) {
	fs.readFile(__dirname + "/users.html", {encoding: "utf-8"}, function(err, data) {
		if (err) {
			return res.send(err.message);
		}

		db.User.findAll().then(function(users){
			var template = handlebars.compile(data);
			var html = template({
				users: users
			});
			res.send(html);
		});			
	});		
}