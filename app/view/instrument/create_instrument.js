var db = require(__dirname + "/../../models");
var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function(req, res) {
	fs.readFile(__dirname + "/instrument.html", {encoding: "utf-8"}, function(err, data) {
        if (err) {
            return res.send(err.message);
        }

        var pComputerModels = db.Customer.findAll();

        Promise.all([pComputerModels]).then(function(values) {
            var cm = values[0];

            console.log("computer models:" + JSON.stringify(cm));

            var template = handlebars.compile(data);
            var html = template({
                cm: values[0]
            });
            res.send(html);
        });
	});
};
