var db = require(__dirname + "/../../models");
var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function(req, res) {
	fs.readFile(__dirname + "/instrument.html", {encoding: "utf-8"}, function(err, data) {
        if (err) {
            return res.send(err.message);
        }

        var pComputerModels = db.ComputerModel.findAll();
        var pMonitorModels = db.MonitorModel.findAll();

        Promise.all([pComputerModels, pMonitorModels]).then(function(values) {
            var template = handlebars.compile(data);
            var html = template({
                computerModels: values[0],
                monitorModels: values[1]
            });
            res.send(html);
        });
	});
};
