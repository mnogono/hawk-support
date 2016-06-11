module.exports = {
    route: function (router) {
        router.route("/user")
            .post(function (req, res) {
                require("../../api/user/create_user")(req, res);
            })
            .get(function (req, res) {
                require("../../api/user/users")(req, res);
            });

        router.route("/user/:id")
            .post(function(req, res) {
                require("../../api/user/edit_user")(req, res);
            })
            .delete(function (req, res) {
                require("../../api/user/delete_user")(req, res);
            })
            .put(function (req, res) {
                require("../../api/user/edit_user")(req, res);
            })
            .get(function (req, res) {
                require("../../api/user/user")(req, res);
            });
    }
};
