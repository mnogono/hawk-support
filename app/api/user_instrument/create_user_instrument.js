var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	if (req.body.instrument_id) {
		db.Instrument.findById(req.body.instrument_id)
		.then(function(instrument){
			db.User.findById(req.body.user_id).then(function(user){
				instrument.addUser(user);
			});
		});		
	}
}