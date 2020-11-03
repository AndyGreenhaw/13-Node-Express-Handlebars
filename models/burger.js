// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

/* 
  Burger Model is in charge of all data related to burgers.
*/


var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      // Can Do Things with Data Here

      cb(res); // Sends back to controller
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {


      cb(res);
    });
  },

  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }

};

// Export the database functions for the controller 
module.exports = burger;