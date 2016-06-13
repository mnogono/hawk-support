var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
    db.ComputerModel.create(req.body.computerModel).then(function() {
        res.send({code: 0});
    });
};
