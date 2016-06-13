var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function(callback){
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
};
