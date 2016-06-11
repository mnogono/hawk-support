module.exports = {
    route: function (router) {
        router.route("/customer")
            .post(function (req, res) {
                require("../../api/customer/create_customer")(req, res);
            })
            .get(function (req, res) {
                require("../../api/customer/customers")(req, res);
            });

        router.route("/customer/:id")
            .post(function (req, res) {
                require("../../api/customer/edit_customer")(req, res);
            })
            .delete(function (req, res) {
                require("../../api/customer/delete_customer")(req, res);
            })
            .put(function (req, res) {
                require("../../api/customer/edit_customer")(req, res);
            })
            .get(function (req, res) {
                require("../../api/customer/customer")(req, res);
            });
    }
};
