var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
    var id = req.params.id;
    db.ComputerModel.findById(id).then(function(computerModel) {
        res.send(computerModel);
    });
};
