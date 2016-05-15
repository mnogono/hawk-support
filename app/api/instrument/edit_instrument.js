var merge = require("merge");
var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	var id = parseInt(req.params.id);
	var data = req.body.instrument;

	db.Instrument.findById(id).then(function(instrument){
		console.log("edit instrument:" + JSON.stringify(data));


		instrument = merge(instrument, data);
		instrument.save();
		res.send({code: 0});
	});
};