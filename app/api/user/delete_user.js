var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	var id = parseInt(req.params.id);
	db.User.findById(id).then(function(user){
		user.destroy().then(function(){
			res.send({code: 0});
		});
	});
}