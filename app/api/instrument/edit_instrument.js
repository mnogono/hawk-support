var merge = require("merge");
var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
	var id = parseInt(req.params.id);
	var data = req.body.instrument;

    var pComputerModel = db.ComputerModel.findOrCreate({
        where: {name: data.computer_model}
    });
    var pInstrument = db.Instrument.findById(id);
    var pMonitorModel = db.MonitorModel.findOrCreate({
        where: {name: data.monitor_model}
    });

    Promise.all([pInstrument, pComputerModel, pMonitorModel]).then(function(values) {
        var instrument = values[0];
        var computerModel = values[1][0];
        var monitorModel = values[2][0];

        data.computer_model_id = computerModel && computerModel.id || null;
        data.monitor_model_id = monitorModel && monitorModel.id || null;

        instrument = merge(instrument, data);
        instrument.save();
        res.send({code: 0});
    });
};
