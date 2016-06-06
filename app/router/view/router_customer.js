module.exports = {
    route: function (router) {
        router.route("/create_customer")
            .get(function (req, res) {
                require("../../view/customer/create_customer.js")(req, res);
            });

        router.route("/customers")
            .get(function (req, res) {
                require("../../view/customer/customers.js")(req, res);
            });

        router.route("/edit_customer/:id")
            .get(function (req, res) {
                require("../../view/customer/edit_customer.js")(req, res);
            });
    }
};
