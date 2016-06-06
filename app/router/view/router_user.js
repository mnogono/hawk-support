module.exports = {
    route: function (router) {
        router.route("/create_user")
            .get(function (req, res) {
                require("../../view/user/create_user.js")(req, res);
            });

        router.route("/users")
            .get(function (req, res) {
                require("../../view/user/users.js")(req, res);
            });

        router.route("/edit_user/:id")
            .get(function (req, res) {
                require("../../view/user/edit_user.js")(req, res);
            });
    }
};
