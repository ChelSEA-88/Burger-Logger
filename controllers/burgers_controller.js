const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

//create all routes
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        var hbsObj = { burger: data };
        res.render("index", hbsObj);
    });
});

// Post = add burger
router.post("/api/burger", (req, res) => {
    burger.insertOne(
        ["burger_name", "devoured"], [req.body.burger_name, req.body.devoured],
        (result) => {
            res.json({ id: result.insertId });
        },
    );
});

//update da burger
router.get("/api/burger/update", (req, res) => {
    burger.updateOne(req.query.id, { devoured: req.query.devoured}, 
       (result) => {   
        res.json({ id: result.insertId });
       });
});

module.exports = router;

