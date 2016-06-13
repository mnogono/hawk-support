var db = require(__dirname + "/../../models");
var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function(req, res) {
    fs.readFile(__dirname + "/support_log_comment.html", {encoding: "utf-8"}, function(err, data) {
        if (err) {
            return res.send(err.message);
        }

        var id = parseInt(req.params.id);

        db.SupportLogComment.findById(id).then(function(supportLogComment) {
            var template = handlebars.compile(data);
            var html = template({
                supportLogComment: supportLogComment
            });
            res.send(html);
        });
    });
};
