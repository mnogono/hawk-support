var db = require(__dirname + "/../models");
var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function(req, res) {
	fs.readFile(__dirname + "\\edit_ticket.html", "utf-8", function(err, source){
		if (err) {
			res.send(err);
		}
		
		var id = req.query.id;
		
		db.Ticket.findById(id).then(function(ticket) {
			var template = handlebars.compile(source);
			var html = template(ticket);
			res.send(html);			
		  // project will be an instance of Project and stores the content of the table entry
		  // with id 123. if such an entry is not defined you will get null
		});
	});
	//console.log("dddd");
	//console.log("id = " + req.query.id);
	/*
	console.log("start editing edit_ticket.html");
	console.log(__dirname + "\\edit_ticket.html");
	fs.readFile(__dirname + "\\edit_ticket.html", "utf-8", function(err, source){
		if (err) {
			res.send(err);
		}
		
		db.Ticket.findAll().then(function(data) {
			//console.log("create_ticket.js");
			var template = handlebars.compile(source);
			var html = template({
				tickets: data
			});
			res.send(html);			
		});
		//res.send("asdasdasd");		
	});
	*/
	//res.send("...1...");
}