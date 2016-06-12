var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function(callback){
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

	fs.readFile(__dirname + "/navigate.html", {encoding: "utf-8"}, function(err, data){
		var template = handlebars.compile(data);
		var html = template();
		handlebars.registerPartial("navigate", html);
	});

	fs.readFile(__dirname + "/head.html", {encoding: "utf-8"}, function(err, data) {
		var template = handlebars.compile(data);
		var html = template();
		handlebars.registerPartial("head", html);
	});

    handlebars.registerHelper("record_property", function() {
        console.log("record property");

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
};
