var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	db.RepairLog.findById(req.params.id).then(function(repairLog){
		repairLog.destroy().then(function(){
			res.send({code: 0});
		});
	});
};
