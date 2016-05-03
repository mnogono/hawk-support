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

router.use(function(req, res, next){
	console.log("any api action can be hooked here!");
	next();
});

router.get("/", function(req, res) {
	res.json({message: "welcome to hawk-support api"});
});

//ticket route
router.route("/ticket")
	.post(function(req, res){
		require("./api/ticket/create_ticket")(req, res);
	})
	.get(function(req, res){
		require("./api/ticket/tickets")(req, res);
	});

router.route("/ticket/:id")
	.delete(function(req, res){
		require("./api/ticket/delete_ticket")(req, res);
	})
	.put(function(req, res){
		require("./api/ticket/edit_ticket")(req, res);
	})
	.get(function(req, res){
		require("./api/ticket/ticket")(req, res);
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

// view ticket route

routerView.route("/create_ticket")
	.get(function(req, res){
		require("./view/ticket/create_ticket.js")(req, res);
	});

routerView.route("/edit_ticket/:id")
	.get(function(req, res){
		require("./view/ticket/edit_ticket.js")(req, res);
	});
	
routerView.route("/tickets")
	.get(function(req, res){
		require("./view/ticket/tickets")(req, res);
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

/*
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
*/

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
	.sync({force: false})
	.then(function(err) {
		console.log("db synced...");
		
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