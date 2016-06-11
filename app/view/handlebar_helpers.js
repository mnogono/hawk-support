var db = require(__dirname + "/../models");
var handlebars = require('handlebars');
var dateFormat = require("dateformat");
var _ = require("underscore");

handlebars.registerHelper("date_format", function(timestamp){
    if (!timestamp || _.isNaN(timestamp)) {
        return "";
    }

	return dateFormat((new Date(timestamp)), "yyyy-mm-dd");
});

handlebars.registerHelper("record_property", function(record_name, id, property){
	db[record_name].findById(id).then(function(record){
		console.log("record: " + JSON.stringify(record));
		return record[property];
	});
});
