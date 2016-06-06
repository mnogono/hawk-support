var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	console.log(req.body);

    var data = req.body.repairLog;

	db.RepairLog.create(data).then(function(repair) {
		if (req.body.repairLog.instrument > 0) {
			var id = req.body.repairLog.instrument;
			db.Instrument.findById(id).then(function(instrument){
				repair.setInstrument(instrument);
			});
		}
		res.send({code: 0, id: repair.id});
	});
};
