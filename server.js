// Dependencies
const express = require("express");
const handlebars = require("express-handlebars")
// const orm = require("./config/orm.js");

///////////
// APP SETUP //
///////////

/*

server - load up our routes
  route listener = controller

-- Route received by server ("/")
-- Controller is listening and detects request on that route
  -- Controller calls burger model and requests data for all burgers; when data received, it renders all cats to the view (via handlebars)
  -- the cat model asks ORM to get that info from whatever DATABASE being used
  -- The ORM is in charge of knowing how to query the database for whatever work needs to be done.

*/

const app = express();

// Set PORT for App
const PORT = process.env.PORT || 3013;

// Access Public Folder 
app.use(express.static('public'));

// Parse Request Body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up express app for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import Routes and Give Server Access
const routes = require("./controllers/burger_controller");
app.use(routes);

// Listen for Client Requests
app.listen(PORT, function() {
  // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
