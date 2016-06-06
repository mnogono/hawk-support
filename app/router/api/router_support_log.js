module.exports = {
    route: function(router) {
        router.route("/support_log")
            .post(function(req, res){
                require("../../api/support_log/create_support_log")(req, res);
            })
            .get(function(req, res){
                require("../../api/support_log/support_logs")(req, res);
            });

        router.route("/support_log/:id")
            .delete(function(req, res){
                require("../../api/support_log/delete_support_log")(req, res);
            })
            .put(function(req, res){
                require("../../api/support_log/edit_support_log")(req, res);
            })
            .get(function(req, res){
                require("../../api/support_log/support_log")(req, res);
            });
    }
};
