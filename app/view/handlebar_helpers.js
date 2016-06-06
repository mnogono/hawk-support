var db = require(__dirname + "/../models");
var handlebars = require('handlebars');
var dateFormat = require("dateformat");

handlebars.registerHelper("date_format", function(timestamp){
	return dateFormat((new Date(timestamp)), "yyyy-mm-dd");
});

handlebars.registerHelper("record_property", function(record_name, id, property){
	db[record_name].findById(id).then(function(record){
		console.log("record: " + JSON.stringify(record));
		return record[property];
	});
});
