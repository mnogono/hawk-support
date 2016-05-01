var app = require(__dirname + "/app");
var port = process.env.PORT || 8081;

var server = app.listen(port, function() {
	console.log("Server started");
});

module.exports = server;
