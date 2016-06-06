module.exports = {
    route: function(router) {
        router.route("/repair_log")
            .post(function(req, res){
                require("../../api/repair_log/create_repair_log")(req, res);
            })
            .get(function(req, res){
                require("../../api/repair_log/repair_logs")(req, res);
            });


        router.route("/repair_log/:id")
            .delete(function(req, res) {
                require("../../api/repair_log/delete_repair_log")(req, res);
            })
            .put(function(req, res){
                require("../../api/repair_log/edit_repair_log")(req, res);
            })
            .get(function(req, res){
                require("../../api/repair_log/repair_log")(req, res);
            });
    }
};
