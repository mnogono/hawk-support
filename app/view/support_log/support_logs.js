var db = require(__dirname + "/../../models");
var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function(req, res) {
	fs.readFile(__dirname + "/support_logs.html", {encoding: "utf-8"}, function(err, data) {
		if (err) {
			return res.send(err.message);
		}
		
		db.SupportLog.findAll().then(function(supportLogs){
			var template = handlebars.compile(data);
			var html = template({
				supportLogs: supportLogs
			});
			res.send(html);
		});
	});		
}