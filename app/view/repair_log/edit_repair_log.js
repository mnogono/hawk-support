var db = require(__dirname + "/../../models");
var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function(req, res) {
	fs.readFile(__dirname + "/edit_repair_log.html", {encoding: "utf-8"}, function(err, data) {
		if (err) {
			return res.send(err.message);
		}

        var id = parseInt(req.params.id);

        var pInstruments = db.Instrument.findAll();
        var pUsers = db.User.findAll();
        var pRepairLog = db.RepairLog.findById(id);

        Promise.all([pRepairLog, pInstruments, pUsers]).then(function(values) {
            var repairLog = values[0];
            var instruments = values[1];
            var users = values[2];
            var status = [
                {id: "open", name: "open"},
                {id: "close", name: "close"},
                {id: "on hold", name: "on hold"},
                {id: "in progress", name: "in progress"}
            ];

            var template = handlebars.compile(data);
            var html = template({
                repairLog: repairLog,
                instruments: instruments,
                users: users,
                status: status
            });
            res.send(html);
        });

        /*
		db.Instrument.findAll()
		.then(function(instruments){
			var id = parseInt(req.params.id);
			db.RepairLog.findById(id).then(function(repairLog){
				var template = handlebars.compile(data);
				var html = template({
					repairLog: repairLog,
					instruments: instruments
				});
				res.send(html);
			});
		});
        */
	});
};
