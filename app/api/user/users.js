var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	db.User.findAll().then(function(users) {
		res.send(users);
	});
}