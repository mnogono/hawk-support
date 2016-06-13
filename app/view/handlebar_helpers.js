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
		return record[property];
	});
});

handlebars.registerHelper("select_options", function(records, property, value){
    if (!records) {
        return "";
    }

    var options = ["<option value=\"NULL\"></option>"];
    for (var i = 0; i < records.length; ++i) {
        var option = ["<option value=\"", records[i].id,"\""];
        if (records[i].id == value) {
            option.push("selected=\"selected\"");
        }
        option.push(">", records[i][property], "</option>");
        options.push(option.join(""));
    }
    return options.join("");
});

handlebars.registerHelper("record_property", function() {
    return new Handlebars.SafeString(
        "button..."
    );

    /*
     return "123";

     for (var i = 0; i < records.length; ++i) {
     if (records[i].id == id) {
     return records[i][property];
     }
     }

     return "";
     */
});
