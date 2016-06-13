var merge = require("merge");
var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
    var id = parseInt(req.params.id);
    var data = req.body.supportLogComment;

    db.SupportLogComment.findById(id).then(function(SupportLogComment){
        for (var p in data) {
            if (data[p] === "NULL") {
                data[p] = null;
            }
        }
        SupportLogComment = merge(SupportLogComment, data);
        SupportLogComment.save();
        res.send({code: 0});
    });
};
