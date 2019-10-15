// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Set up Express app
var app = express();
var PORT = process.env.PORT || 8080;

// Set up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"));

// Import routes.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// start listen
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});