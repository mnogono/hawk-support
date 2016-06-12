var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	var id = req.params.id;
	db.Instrument.findById(id).then(function(instrument) {
        instrument.getSupportLogs().then(function(supportLogs){
            res.send(supportLogs);
        });
	});
};
