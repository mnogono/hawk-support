var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	console.log(req.body.instrument);
	
	db.Instrument.create({
		serial_number: req.body.instrument.serial_number,
		computer_serial_number: req.body.instrument.computer_serial_number,
		monitor_serial_number: req.body.instrument.monitor_serial_number,
		ups_serial_number: req.body.instrument.ups_serial_number
	}).then(function() {
		res.send({code: 0});
	});
}