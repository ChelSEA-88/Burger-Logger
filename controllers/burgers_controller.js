const express = require("express");

const router = express.Router();

// Import burger model
const burger = require("../models/burger.js");

// Routes
// Get all burgers from the DB
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
    let hbsObject = {
        burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
    });
});

// Post a burger to the DB
router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
      // Send back the ID of the new quote
    res.json({ id: result.insertId });
    });
});

//Update a burger in the DB
router.put("/api/burgers/:id", function(req, res) {
    let conditionCol = "id";
    let conditionVal = req.params.id;
    let col = "devoured";
    let val = req.body.devoured;

    burger.updateOne(col, val, conditionCol, conditionVal, function(result) {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404.
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Delete a burger from the DB
router.delete("/api/burgers/:id", function(req, res) {
    let conditionCol = "id";
    let conditionVal = req.params.id;

    burger.deleteOne(conditionCol, conditionVal, function(result) {
    if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, use 404
        return res.status(404).end();
    } else {
        res.status(200).end();
    }
    });
});



// Export Router
module.exports = router;

