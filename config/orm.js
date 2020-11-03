const connection = require("./connection.js");

/* 
ORM is in charge of all DATABASE-related work, regardless of what tables are being used.
*/

////////////////////////////////
// PRE-BUILD HELPER FUNCTIONS //
////////////////////////////////

// Pre-Build Question Marks
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

let orm = {
  // Return all records for ANY table specified

    //READ
    all: function (tableInput,cb){
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (error, result) {
            if (error) throw error;
            cb(result);
        })
    },

    // POST
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    },

    // DELETE
    delete: function(table, condition, cb) {
      var queryString = "DELETE FROM " + table;
      queryString += " WHERE ";
      queryString += condition;
  
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
      
};
  
module.exports = orm;