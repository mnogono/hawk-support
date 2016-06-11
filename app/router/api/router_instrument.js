module.exports = {
    route: function(router) {
        router.route("/instrument")
            .post(function(req, res){
                require("../../api/instrument/create_instrument")(req, res);
            })
            .get(function(req, res){
                require("../../api/instrument/instruments")(req, res);
            });

        router.route("/instrument/:id")
            .post(function(req, res){
                require("../../api/instrument/edit_instrument")(req, res);
            })
            .delete(function(req, res){
                require("../../api/instrument/delete_instrument")(req, res);
            })
            .put(function(req, res){
                require("../../api/instrument/edit_instrument")(req, res);
            })
            .get(function(req, res){
                require("../../api/instrument/instrument")(req, res);
            });

        router.route("/instrument/:id/repair_logs")
            .get(function(req, res){
                require("../../api/instrument/instrument_repair_logs")(req, res);
            });

        router.route("/instrument/:id/support_logs")
            .get(function(req, res){
                require("../../api/instrument/instrument_support_logs")(req, res);
            });

        router.route("/instrument/:id/support_logs/open")
            .get(function(req, res){
                require("../../api/instrument/instrument_support_logs_open")(req, res);
            })
    }
};


