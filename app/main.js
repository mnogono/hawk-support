var bodyParser = require("body-parser");
var mysql = require("mysql");
var express = require("express");
var handlebars = require("handlebars");
var express_handlebars = require("express-handlebars");
var app = express();
app.use(express.static("public"));
app.engine(".html", express_handlebars({defaultLayout: "single", extname: ".html"}));
app.set("view engine", ".html");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));


require(__dirname + "/view/template_partials.js")();

require(__dirname + "/view/handlebar_helpers.js");

var routerRedirect = express.Router();

routerRedirect.get("/", function(req, res){
	res.writeHeader(302, {
		"Location": "/view/dashboard"
	});
	res.end();
});

var router = express.Router();
/*
router.use(function(req, res, next){
	console.log("any api action can be hooked here!");
	next();
});
*/
router.get("/", function(req, res) {
	//res.json({message: "welcome to hawk-support api"});
	res.writeHeader(302, {
		'Location': "/view/support_logs"
	});
	res.end();
});

//repair log

router.route("/repair_log")
	.post(function(req, res){
		require("./api/repair_log/create_repair_log")(req, res);
	});

//user_instrument

router.route("/user_instrument")
	.post(function(req, res){
		require("./api/user_instrument/create_user_instrument")(req, res);
	});
router.route("/user_instrument/:id")
	.delete(function(req, res){
		require("./api/user_instrument/delete_user_instrument")(req, res);
	});

//support_log route
router.route("/support_log")
	.post(function(req, res){
		require("./api/support_log/create_support_log")(req, res);
	})
	.get(function(req, res){
		require("./api/support_log/support_logs")(req, res);
	});

router.route("/support_log/:id")
	.delete(function(req, res){
		require("./api/support_log/delete_support_log")(req, res);
	})
	.put(function(req, res){
		require("./api/support_log/edit_support_log")(req, res);
	})
	.get(function(req, res){
		require("./api/support_log/support_log")(req, res);
	});


//instrument route
router.route("/instrument")
	.post(function(req, res){
		require("./api/instrument/create_instrument")(req, res);
	})
	.get(function(req, res){
		require("./api/instrument/instruments")(req, res);
	});

router.route("/instrument/:id")
	.delete(function(req, res){
		require("./api/instrument/delete_instrument")(req, res);
	})
	.put(function(req, res){
		require("./api/instrument/edit_instrument")(req, res);
	})
	.get(function(req, res){
		require("./api/instrument/instrument")(req, res);
	});

router.route("/instrument/:id/repair_logs")
    .get(function(req, res){
        require("./api/instrument/instrument_repair_logs")(req, res);
    });

router.route("/instrument/:id/support_logs")
    .get(function(req, res){
        require("./api/instrument/instrument_support_logs")(req, res);
    });

//customer route

router.route("/customer")
	.post(function(req, res){
		require("./api/customer/create_customer")(req, res);
	})
	.get(function(req, res){
		require("./api/customer/customers")(req, res);
	});

router.route("/customer/:id")
	.delete(function(req, res){
		require("./api/customer/delete_customer")(req, res);
	})
	.put(function(req, res){
		require("./api/customer/edit_customer")(req, res);
	})
	.get(function(req, res){
		require("./api/customer/customer")(req, res);
	});

//user route

router.route("/user")
	.post(function(req, res){
		require("./api/user/create_user")(req, res);
	})
	.get(function(req, res){
		require("./api/user/users")(req, res);
	});

router.route("/user/:id")
	.delete(function(req, res){
		require("./api/user/delete_user")(req, res);
	})
	.put(function(req, res){
		require("./api/user/edit_user")(req, res);
	})
	.get(function(req, res){
		require("./api/user/user")(req, res);
	});

// view route

var routerView = express.Router();

// view support_log route

routerView.route("/create_support_log")
	.get(function(req, res){
		require("./view/support_log/create_support_log.js")(req, res);
	});

routerView.route("/edit_support_log/:id")
	.get(function(req, res){
		require("./view/support_log/edit_support_log.js")(req, res);
	});

routerView.route("/support_logs")
	.get(function(req, res){
		require("./view/support_log/support_logs")(req, res);
	});

// view instrument

routerView.route("/create_instrument")
	.get(function(req, res){
		require("./view/instrument/create_instrument.js")(req, res);
	});

routerView.route("/instruments")
	.get(function(req, res){
		require("./view/instrument/instruments.js")(req, res);
	});
routerView.route("/edit_instrument/:id")
	.get(function(req, res){
		require("./view/instrument/edit_instrument.js")(req, res);
	});

// view customer

routerView.route("/create_customer")
	.get(function(req, res){
		require("./view/customer/create_customer.js")(req, res);
	});

routerView.route("/customers")
	.get(function(req, res){
		require("./view/customer/customers.js")(req, res);
	});
routerView.route("/edit_customer/:id")
	.get(function(req, res){
		require("./view/customer/edit_customer.js")(req, res);
	});

// view user

routerView.route("/create_user")
	.get(function(req, res){
		require("./view/user/create_user.js")(req, res);
	});

routerView.route("/users")
	.get(function(req, res){
		require("./view/user/users.js")(req, res);
	});
routerView.route("/edit_user/:id")
	.get(function(req, res){
		require("./view/user/edit_user.js")(req, res);
	});

// view repair

routerView.route("/create_repair_log")
	.get(function(req, res){
		require("./view/repair_log/create_repair_log.js")(req, res);
	});

routerView.route("/edit_repair_log/:id")
	.get(function(req, res){
		require("./view/repair_log/edit_repair_log.js")(req, res);
	});

routerView.route("/repair_logs")
	.get(function(req, res){
		require("./view/repair_log/repair_logs")(req, res);
	});


// view dashboard

routerView.route("/dashboard")
	.get(function(req, res){
		require("./view/dashboard/dashboard")(req, res);
	});

app.use("/", routerRedirect);
app.use("/api", router);
app.use("/view", routerView);

var fs = require("fs");
var db = require("./models");

db.sequelize
	.sync({force: false})
	.then(function(err) {
		console.log("db synced...");

	}, function(err) {
		console.log("error: ", err);
	});

module.exports = app;
