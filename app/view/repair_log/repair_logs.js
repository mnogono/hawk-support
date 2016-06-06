var db = require(__dirname + "/../../models");
var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function(req, res) {
	fs.readFile(__dirname + "/repair_logs.html", {encoding: "utf-8"}, function(err, data) {
		if (err) {
			return res.send(err.message);
		}
		
		db.RepairLog.findAll().then(function(repairLogs){
			var template = handlebars.compile(data);
			var html = template({
				repairLogs: repairLogs
			});
			res.send(html);
		});
	});		
};