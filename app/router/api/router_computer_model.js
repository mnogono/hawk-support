module.exports = {
    route: function (router) {
        router.route("/computer_model")
            .post(function (req, res) {
                require("../../api/computer_model/create_computer_model")(req, res);
            })
            .get(function (req, res) {
                require("../../api/computer_model/computer_models")(req, res);
            });

        router.route("/computer_model/:id")
            .delete(function (req, res) {
                require("../../api/computer_model/delete_computer_model")(req, res);
            })
            .put(function (req, res) {
                require("../../api/computer_model/edit_computer_model")(req, res);
            })
            .get(function (req, res) {
                require("../../api/computer_model/computer_model")(req, res);
            });
    }
};
