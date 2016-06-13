var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
    var data = req.body.supportLog;
    db.SupportLog.create(data).then(function(supportLog) {
        res.send({code: 0, id: supportLog.id});
    });
};
