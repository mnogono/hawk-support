var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
    db.ComputerModel.findAll().then(function(computerModels) {
        res.send(computerModels);
    });
};
