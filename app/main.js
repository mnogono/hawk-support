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