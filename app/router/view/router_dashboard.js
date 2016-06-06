module.exports = {
    route: function (router) {
        router.route("/dashboard")
            .get(function (req, res) {
                require("../../view/dashboard/dashboard")(req, res);
            });
    }
};
