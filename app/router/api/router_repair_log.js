module.exports = {
    route: function(router) {
        router.route("/repair_log")
            .post(function(req, res){
                require("../../api/repair_log/create_repair_log")(req, res);
            });
    }
};
