// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

/* 
  Burger Model is in charge of all data related to burgers.
*/


var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      // do stuff with data

      cb(res); // Sends back to controller
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller 
module.exports = burger;