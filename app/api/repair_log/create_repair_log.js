var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	console.log(req.body);

    var data = req.body.repairLog;

	db.RepairLog.create(data).then(function(repairLog) {
        var instrumentId = req.body.repairLog.instrument;
        var reporterId = req.body.repairLog.reporter;
        var assigneeId = req.body.repairLog.assignee;

        console.log("reporterId: " + reporterId);
        console.log("assigneeId: " + assigneeId);

        var pInstrument = db.Instrument.findById(instrumentId);
        var pReporter = db.User.findById(reporterId);
        var pAssignee = db.User.findById(assigneeId);


        Promise.all([pInstrument, pReporter, pAssignee]).then(function(values) {
            var instrument = values[0];
            var reporter = values[1];
            var assignee = values[2];

            repairLog.setInstrument(instrument);
            repairLog.setReporter(reporter);
            repairLog.setAssignee(assignee);
        });

        /*
		if ( > 0) {
			var id = req.body.repairLog.instrument;
			db.Instrument.findById(id).then(function(instrument){
				repairLog.setInstrument(instrument);
			});
		}
		*/

		res.send({code: 0, id: repairLog.id});
	});
};
