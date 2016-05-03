var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	db.Instrument.findAll().then(function(instruments) {
		res.send(instruments);
	});
}