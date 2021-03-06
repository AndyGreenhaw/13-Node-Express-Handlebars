
const express = require("express");
const burger = require("../models/burger.js")

const router = express.Router();

//////////////////////////////
// CRUD HQ FOR ALL REQUESTS //
//////////////////////////////
// Controllers don't care how the data is obtained; controllers pass that work off to the model


// Create Route
router.get("/", (req, res) =>{

    // call orm to get the data we need
    burger.all((data)=>{
        const burgerObj = {
            burgers: data
        }
        console.log(burgerObj);
        res.render("index",burgerObj);
    });
});

router.post("/api/burgers", (req, res) =>{
    burger.create([
        "burger_name", "devoured"
      ], [
        req.body.burger_name, req.body.devoured
      ], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
      });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router