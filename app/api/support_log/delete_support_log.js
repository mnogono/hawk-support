var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	db.SupportLog.findById(req.params.id).then(function(supportLog){
		supportLog.destroy().then(function(){
			res.send({code: 0});
		});
	});
}