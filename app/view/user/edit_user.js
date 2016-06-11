var db = require(__dirname + "/../../models");
var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function(req, res) {
	fs.readFile(__dirname + "/user.html", {encoding: "utf-8"}, function(err, data) {
		if (err) {
			return res.send(err.message);
		}
		var id = parseInt(req.params.id);
		db.User.findById(id).then(function(user){
			var template = handlebars.compile(data);
			var html = template({
                user: user
            });
			res.send(html);
		});
	});
};
