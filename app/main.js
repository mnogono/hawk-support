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

var router = express.Router();

app.use("/", require(__dirname + "/router/router_redirect.js"));
app.use("/api", require(__dirname + "/router/router_api.js"));
app.use("/view", require(__dirname + "/router/router_view.js"));

var db = require("./models");

db.sequelize
	.sync({force: false})
	.then(function(err) {
		console.log("db synced...");

	}, function(err) {
		console.log("error: ", err);
	});

/**
 DROP TABLE IF EXISTS `user_instrument`;
 DROP TABLE IF EXISTS  `user`;
 DROP TABLE IF EXISTS  `monitor_model`;
 DROP TABLE IF EXISTS  `instrument`;
 DROP TABLE IF EXISTS  `customer`;
 DROP TABLE IF EXISTS  `computer_model`;
 DROP TABLE IF EXISTS  `support_log`;
 DROP TABLE IF EXISTS  `order`;
 DROP TABLE IF EXISTS  `comment`;
 DROP TABLE IF EXISTS  `repair_log`;
*/

module.exports = app;
