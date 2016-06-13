var db = require(__dirname + "/../../models");

module.exports = function(req, res) {
    db.SupportLogComment.findById(req.params.id).then(function(supportLogComment){
        supportLogComment.destroy().then(function(){
            res.send({code: 0});
        });
    });
};
