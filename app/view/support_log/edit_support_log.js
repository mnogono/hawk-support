var db = require(__dirname + "/../../models");
var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function(req, res) {
	fs.readFile(__dirname + "/support_log.html", {encoding: "utf-8"}, function(err, data) {
		if (err) {
			return res.send(err.message);
		}

        var id = parseInt(req.params.id);

        var pUsers = db.User.findAll();
        var pInstruments = db.Instrument.findAll();
        var pSupportLog = db.SupportLog.findById(id);


        Promise.all([pUsers, pInstruments, pSupportLog]).then(function(values) {
            var supportLog = values[2];
            supportLog.getSupportLogComments().then(function(supportLogComments) {
                var users = values[0];
                var instruments = values[1];
                var supportLog = values[2];

                var template = handlebars.compile(data, {
                    strict: true,
                    data: false
                });

                for (var i = 0; i < supportLogComments.length; ++i) {
                    for (var u = 0; u < users.length; ++u) {
                        if (users[u].id == supportLogComments[i].author_id) {
                            supportLogComments[i].author = users[u].name;
                        }
                    }
                }

                var html = template({
                    users: users,
                    instruments: instruments,
                    supportLog: supportLog,
                    status: [
                        {id: "open", name: "open"},
                        {id: "close", name: "close"},
                        {id: "on hold", name: "on hold"},
                        {id: "in progress", name: "in progress"}
                    ],
                    supportLogComments: supportLogComments
                });
                res.send(html);
            });
        });
	});
};
