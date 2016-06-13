var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
    var data = req.body.supportLogComment;
    db.SupportLogComment.create(data).then(function(supportLogComment) {
        res.send({code: 0, id: supportLogComment.id});
    });
};
