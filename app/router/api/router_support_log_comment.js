module.exports = {
    route: function (router) {
        router.route("/support_log_comment")
            .post(function(req, res){
                require("../../api/support_log_comment/create_support_log_comment")(req, res);
            });

        router.route("/support_log_comment/:id")
            .post(function (req, res) {
                require("../../api/support_log_comment/edit_support_log_comment")(req, res);
            })
            .delete(function (req, res) {
                require("../../api/support_log_comment/delete_support_log_comment")(req, res);
            })
            .put(function (req, res) {
                require("../../api/support_log_comment/edit_support_log_comment")(req, res);
            })
            .get(function (req, res) {
                require("../../api/support_log_comment/support_log_comment")(req, res);
            });
    }
};
