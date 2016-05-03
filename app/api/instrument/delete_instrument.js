var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	console.log("deleted instrument by id: " + req.params.id);
	db.Instrument.findById(req.params.id).then(function(instrument){
		instrument.destroy().then(function(){
			console.log("instrument deleted");
			res.send({code: 0});
		});
	});
}