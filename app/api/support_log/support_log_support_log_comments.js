var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
    var supportLogId = req.params.id;

    db.SupportLogComment.findAll({
        where: {
            support_log_id: supportLogId
        }
    }).then(function(supportLogComments) {
        res.send(supportLogComments);
    });
};
