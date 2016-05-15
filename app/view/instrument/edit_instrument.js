var db = require(__dirname + "/../../models");
var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function(req, res) {
	fs.readFile(__dirname + "/edit_instrument.html", {encoding: "utf-8"}, function(err, data) {
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


        /*
		var users;
		var instrumentUsers;
		var instrument;
        var customers;

		db.User.findAll()
		.then(function(_users){
			users = _users;
			return users;
		})
		.then(function(users){
			var id = parseInt(req.params.id);
			db.Instrument.findById(id).then(function(_instrument){
				instrument = _instrument;
				return instrument;
			})
			.then(function(instrument){
				instrument.getUsers()
				.then(function(_instrumentUsers){
					instrumentUsers = _instrumentUsers;
				})
				.then(function(){
					var template = handlebars.compile(data);
					var html = template({
						instrument: instrument,
						users: users,
						instrument_users: instrumentUsers
					});
					res.send(html);
				});
			});
		});
		*/
	});
};
