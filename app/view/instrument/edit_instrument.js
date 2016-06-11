var db = require(__dirname + "/../../models");
var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function(req, res) {
	fs.readFile(__dirname + "/instrument.html", {encoding: "utf-8"}, function(err, data) {
		if (err) {
			return res.send(err.message);
		}

        var pUsers = db.User.findAll();
        var pInstrument = db.Instrument.findById(parseInt(req.params.id));
        var pCustomers = db.Customer.findAll();
        var pInstrumentUsers = pInstrument.then(function(instrument){
            instrument.getUsers()
        });

        Promise.all([pInstrument, pUsers, pCustomers, pInstrumentUsers]).then(function(records) {
            var template = handlebars.compile(data);
            var html = template({
                instrument: records[0],
                users: records[1],
                customers: records[2],
                instrument_users: records[3]
            });
            res.send(html);
        });
	});
};
