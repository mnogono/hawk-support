var merge = require("merge");
var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	var id = parseInt(req.params.id);
	var data = req.body.user;

	db.User.findById(id).then(function(user){
		user = merge(user, data);
		user.save();
		res.send({code: 0});
	});
}