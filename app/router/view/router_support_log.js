module.exports = {
    route: function (router) {
        router.route("/create_support_log")
            .get(function (req, res) {
                require("../../view/support_log/create_support_log.js")(req, res);
            });

        router.route("/edit_support_log/:id")
            .get(function (req, res) {
                require("../../view/support_log/edit_support_log.js")(req, res);
            });

        router.route("/support_logs")
            .get(function (req, res) {
                require("../../view/support_log/support_logs")(req, res);
            });
    }
};
