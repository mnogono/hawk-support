var db = require(__dirname + "/../../models");
var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function(req, res) {
	fs.readFile(__dirname + "/support_log.html", {encoding: "utf-8"}, function(err, data) {
		if (err) {
			return res.send(err.message);
		}

        var pUsers = db.User.findAll();
        var pInstruments = db.Instrument.findAll();

        Promise.all([pUsers, pInstruments]).then(function(values) {
            var template = handlebars.compile(data);
            var html = template({
                users: values[0],
                instruments: values[1],
                status: [
                    {id: "open", name: "open"},
                    {id: "close", name: "close"},
                    {id: "on hold", name: "on hold"},
                    {id: "in progress", name: "in progress"}
                ]
            });
            res.send(html);
        });
	});
};
