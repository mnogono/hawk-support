var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	db.RepairLog.findAll().then(function(repairLogs) {
		res.send(repairLogs);
	});
}
