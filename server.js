var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
});

app.use(require("./routes/htmlroutes"));
app.use(require("./routes/apiroutes"));
// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});
