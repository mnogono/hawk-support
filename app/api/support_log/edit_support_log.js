var merge = require("merge");
var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	var id = parseInt(req.params.id);
	var data = req.body.supportLog;

	db.SupportLog.findById(id).then(function(supportLog){
		for (var p in data) {
			if (data[p] === "NULL") {
				data[p] = null;
			}
		}
		supportLog = merge(supportLog, data);
		supportLog.save();
		res.send({code: 0});
	});
}