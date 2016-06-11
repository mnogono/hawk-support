var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
    var data = req.body.supportLog;

    db.SupportLog.create(data).then(function(supportLog) {
        res.send({code: 0, id: supportLog.id});
        /*
        if (req.body.supportLog.instrument > 0) {
            var id = req.body.supportLog.instrument;
            db.Instrument.findById(id).then(function(instrument){
                supportLog.setInstrument(instrument);
            });
        }
        res.send({code: 0, id: supportLog.id});
        */
    });
};


