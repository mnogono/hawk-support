module.exports = {
    route: function (router) {
        router.route("/create_instrument")
            .get(function (req, res) {
                require("../../view/instrument/create_instrument.js")(req, res);
            });

        router.route("/instruments")
            .get(function (req, res) {
                require("../../view/instrument/instruments.js")(req, res);
            });
        router.route("/edit_instrument/:id")
            .get(function (req, res) {
                require("../../view/instrument/edit_instrument.js")(req, res);
            });

        router.route("/dashboard/instrument/:id/support_logs")
            .get(function (req, res) {
                require("../../view/dashboard/instrument_support_logs.js")(req, res);
            });
    }
};
