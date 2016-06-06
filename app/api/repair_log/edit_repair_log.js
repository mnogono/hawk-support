var merge = require("merge");
var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	var id = parseInt(req.params.id);
	var data = req.body.repairLog;

	db.RepairLog.findById(id).then(function(repairLog){
		for (var p in data) {
			if (data[p] === "NULL") {
				data[p] = null;
			}
		}
		repairLog = merge(repairLog, data);
		repairLog.save();
		res.send({code: 0});
	});
};
