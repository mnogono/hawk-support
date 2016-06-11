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
            var template = handlebars.compile(data);
            var html = template({
                users: values[0],
                instruments: values[1],
                supportLog: values[2]
            });
            res.send(html);
        });
        /*
		db.Instrument.findAll()
		.then(function(instruments){
			var id = parseInt(req.params.id);
			db.SupportLog.findById(id).then(function(supportLog){
				var template = handlebars.compile(data);
				var html = template({
					supportLog: supportLog,
					instruments: instruments
				});
				res.send(html);
			});
		});
		*/
	});
};
