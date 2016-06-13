module.exports = {
    route: function (router) {
        router.route("/edit_support_log_comment/:id")
            .get(function (req, res) {
                require("../../view/support_log_comment/edit_support_log_comment.js")(req, res);
            });
    }
};
