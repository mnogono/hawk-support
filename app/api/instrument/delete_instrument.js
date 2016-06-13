var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	db.Instrument.findById(req.params.id).then(function(instrument){
		instrument.destroy().then(function(){
			res.send({code: 0});
		});
	});
};
