module.exports = {
    route: function(router) {
        router.route("/user_instrument")
            .post(function(req, res){
                require("../../api/user_instrument/create_user_instrument")(req, res);
            });
        router.route("/user_instrument/:id")
            .delete(function(req, res){
                require("../../api/user_instrument/delete_user_instrument")(req, res);
            });
    }
};
