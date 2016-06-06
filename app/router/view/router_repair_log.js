module.exports = {
    route: function (router) {
        router.route("/create_repair_log")
            .get(function (req, res) {
                require("../../view/repair_log/create_repair_log.js")(req, res);
            });

        router.route("/edit_repair_log/:id")
            .get(function (req, res) {
                require("../../view/repair_log/edit_repair_log.js")(req, res);
            });

        router.route("/repair_logs")
            .get(function (req, res) {
                require("../../view/repair_log/repair_logs")(req, res);
            });
    }
};
