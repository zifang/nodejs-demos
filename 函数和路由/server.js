var server = require("./index.js");
var router = require("./router.js");
 
server.start(router.route);