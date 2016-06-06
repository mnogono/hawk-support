var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
    var id = req.params.id;
    db.RepairLog.findById(id).then(function(repairLog) {
        res.send(repairLog);
    });
};
