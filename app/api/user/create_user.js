var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	db.User.create(req.body.user).then(function() {
		res.send({code: 0});
	});
}