var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
    var instrumentId = req.params.id;

    db.SupportLog.findAll({
        where: {
            instrument_id: instrumentId,
            status: "open"
        }
    }).then(function(supportLogs) {
       res.send(supportLogs);
    });
    /*
    db.Instrument.findById(id).then(function(instrument) {
        instrument.getSupportLogs().then(function(supportLogs){
            res.send(supportLogs);
        });
    });
    */
};
