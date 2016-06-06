var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
    var id = req.params.id;
    db.User.findById(id).then(function(user) {
        res.send(user);
    });
};
