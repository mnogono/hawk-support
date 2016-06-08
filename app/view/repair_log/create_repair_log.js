var db = require(__dirname + "/../../models");
var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function(req, res) {
	fs.readFile(__dirname + "/create_repair_log.html", {encoding: "utf-8"}, function(err, data) {
		if (err) {
			return res.send(err.message);
		}

        var pUsers = db.User.findAll();
        var pInstruments = db.Instrument.findAll();

        Promise.all([pUsers, pInstruments]).then(function(values) {
            var template = handlebars.compile(data);
            var html = template({
                instruments: values[1],
                users: values[0]
            });
            res.send(html);
        });

        //db.User.findAll()
        /*
		db.Instrument.findAll().then(function(instruments){
			var template = handlebars.compile(data);
			var html = template({
				instruments: instruments
			});
			res.send(html);
		});
		*/
	});
};
