var db = require(__dirname + "/../../models");
var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function(req, res) {
	fs.readFile(__dirname + "/support_logs.html", {encoding: "utf-8"}, function(err, data) {
		if (err) {
			return res.send(err.message);
		}

        var pUsers = db.User.findAll();
        var pSupportLogs = db.SupportLog.findAll();

        Promise.all([pUsers, pSupportLogs]).then(function(values) {
            var users = values[0];
            var supportLogs = values[1];

            for (var i = 0; i < supportLogs.length; ++i) {
                supportLogs[i].reporter = "";
                supportLogs[i].assignee = "";

                for (var u = 0; u < users.length; ++u) {
                    if (users[u].id == supportLogs[i].reporter_id) {
                        supportLogs[i].reporter = users[u].name;
                    }
                    if (users[u].id == supportLogs[i].assignee_id) {
                        supportLogs[i].assignee = users[u].name;
                    }
                }
            }

            var template = handlebars.compile(data);
            var html = template({
                supportLogs: supportLogs
            });
            res.send(html);
        });
	});
};
