var express = require("express");
var router = express.Router();
var fs = require("fs");

//scan each file into router/api folder and execute function route
fs.readdirSync(__dirname + "/api").map(function(file) {
    var m = require(__dirname + "/api/" + file);
    m.route(router);
});

module.exports = router;
