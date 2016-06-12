var db = require(__dirname + "/../../models");
var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function (req, res) {
    fs.readFile(__dirname + "/instrument_support_logs.html", {encoding: "utf-8"}, function (err, data) {
        if (err) {
            return res.send(err.message);
        }

        var id = req.params.id;

        var pUsers = db.User.findAll();

        db.Instrument.findById(id).then(function (instrument) {

            var pSupportLogs = instrument.getSupportLogs();

            Promise.all([pUsers, pSupportLogs]).then(function (values) {
                var template = handlebars.compile(data);
                var html = template({
                    instrument: instrument,
                    supportLogs: values[1],
                    users: values[0]
                });
                res.send(html);
            });
        });
    });
};
