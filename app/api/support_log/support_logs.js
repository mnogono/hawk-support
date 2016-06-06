var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	db.SupportLog.findAll().then(function(supportLogs) {
		res.send(supportLogs);
	});
}