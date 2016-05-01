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

var fs = require("fs");
var db = require("./models");

var dashboard_tickets = require("./pages/dashboard_tickets");
var create_ticket = require("./pages/create_ticket");
var post_create_ticket = require("./pages/post_create_ticket");

app.get("/", function(req, res) {
	db.Ticket.findAll().then(function(data) {
		
		//res.send(data);	
	});
});


var put_ticket = require("./pages/put_ticket");
app.put("/put_ticket", function(req, res) {
	put_ticket(req, res);
});

var post_edit_ticket = require("./pages/post_edit_ticket");
app.post("/post_edit_ticket", function(req, res) {
	post_edit_ticket(req, res);
});

app.get("/dashboard_tickets", function(req, res) {
	dashboard_tickets(req, res);
});

app.get("/create_ticket", function(req, res) {
	create_ticket(req, res);
});

app.post("/create_ticket", function(req, res) {
	post_create_ticket(req, res);
});

//var dbConfig = require('./db_config.json');
/*
var connection = mysql.createConnection(dbConfig);
connection.connect();
*/
/*
app.get("/", function(req, res) {
	
	connection.query("SELECT * from user", function(err, rows, fields) {
		if (!err) {
			console.log("The solution is: ", rows);
		} else {
			console.log("Error while performing query.");
		}
		res.send("Hello World");
	});
	//connection.end();
});
*/
//console.log(dbConfig);
//debugger;
//create models
/*
var Sequelize = require("sequelize");
var sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
	dialect: "mysql",
	port: dbConfig.port
});
*/
/*
sequelize
	.authenticate()
	.then(function(err) {
		console.log("Connection ok");
	}, function(err) {
		console.log("unable to connect err: ", err);
	});

*/
//order model
/*
var Order = sequelize.define("Order", {
	name: {type: Sequelize.STRING},
	ship_date: {type: Sequelize.DATE},
	cost: {type: Sequelize.FLOAT},
	title: {type: Sequelize.STRING}
}, {
	paranoid: false,
	underscored: true
});
*/


db.sequelize
	.sync({force: true})
	.then(function(err) {
		console.log("synced...");
		
	}, function(err) {
		console.log("error: ", err);
	});

	/*
app.get("/customers", function(req, res) {
	var customers = db.Customer.findAll().then(function(customer) {
		res.send(customer);
	});
	
});
*/
	
//module.exports = {
//	"server": app,
//	"db": db
//}
module.exports = app;