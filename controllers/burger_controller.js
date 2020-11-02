// This Controller is Main CRUD HQ for All Car-Related Requests
// Controllers don't care how the data is obtained; controllers pass that work off to the model.

const express = require("express");
const burger = require("../models/burger")

const app = express();
const router = express.Router();

// Create Route
router.get("/", (req, res) =>{

    // call our orm to get the data we need
    burger.all((data)=>{
        const burgerObj = {
            burgers: data
        }
        console.log(burgerObj);
        res.render("index",burgerObj);
    });
});

router.post("/api/burgers", (req, res) =>{

    burger.insertOne([
        "name", "devoured"
      ], [
        req.body.name, req.body.devoured
      ], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
      });
});

router.put("/api/burgers/:id", function(req, res) {

    var condition = "id = " + req.params.id;
    console.log("condition", condition);
  
    burger.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router