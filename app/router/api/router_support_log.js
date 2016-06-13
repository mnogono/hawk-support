module.exports = {
    route: function (router) {
        router.route("/support_log")
            .post(function (req, res) {
                require("../../api/support_log/create_support_log")(req, res);
            })
            .get(function (req, res) {
                require("../../api/support_log/support_logs")(req, res);
            });

        router.route("/support_log/:id")
            .post(function (req, res) {
                require("../../api/support_log/edit_support_log")(req, res);
            })
            .delete(function (req, res) {
                require("../../api/support_log/delete_support_log")(req, res);
            })
            .put(function (req, res) {
                require("../../api/support_log/edit_support_log")(req, res);
            })
            .get(function (req, res) {
                require("../../api/support_log/support_log")(req, res);
            });

        router.route("/support_log/:id/open")
            .get(function (req, res) {
                require("../../api/support_log/support_logs_open")(req, res);
            });

        router.route("/support_log/:id/support_log_comments")
            .get(function(req, res) {
                require("../../api/support_log/support_log_support_log_comments")(req, res);
            });
    }
};
