var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
    console.log("create computer model...");

    db.ComputerModel.create(req.body.computerModel).then(function() {
        res.send({code: 0});
    });
};
