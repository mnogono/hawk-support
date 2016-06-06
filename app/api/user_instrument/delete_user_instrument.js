var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	var id = parseInt(req.params.id);
	db.UserInstrument.findById(id).then(function(userInstrument){
		userInstrument.destroy().then(function(){
			res.send({code: 0});
		});
	});
}