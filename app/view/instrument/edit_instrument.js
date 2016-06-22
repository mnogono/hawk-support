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
        var pComputerModels = db.ComputerModel.findAll();
        var pMonitorModels = db.MonitorModel.findAll();

        Promise.all([pInstrument, pUsers, pCustomers, pInstrumentUsers, pComputerModels, pMonitorModels]).then(function(records) {
            var instrument = records[0];
            var users = records[1];
            var customers = records[2];
            var instrumentUsers = records[3];
            var computerModels = records[4];
            var monitorModels = records[5];

            instrument.computer_model = "";
            instrument.monitor_model = "";
            for (var i = 0; i < computerModels.length; ++i) {
                if (instrument.computer_model_id == computerModels[i].id) {
                    instrument.computer_model = computerModels[i].name;
                }
                if (instrument.monitor_model_id == monitorModels[i].id) {
                    instrument.monitor_model = monitorModels[i].name;
                }
            }

            var template = handlebars.compile(data);
            var html = template({
                instrument: instrument,
                users: users,
                customers: customers,
                instrument_users: instrumentUsers,
                computerModels: computerModels
            });
            res.send(html);
        });
	});
};
