const express = require('express')
const router = express.Router()
const FoodSchema = require("../models/FoodSchema")
const verifyToken = require('../middleware/authorization')


// Menu Handler
router.get("/foods", async (req, res) => {
    console.log("ALL")
    const food = await FoodSchema.find();
    res.json(food);
});


/**
 * Find one specific food with foodID
 * null if find none
 */

router.get("/foods/:foodID", async (req, res) => {
    await FoodSchema.findOne({ foodID: req.params.foodID },
        (err, data) => {
            if (err) {
                console.log(err);
                return res.send(500, 'Something Went wrong with Retrieving data');
            } else {
                console.log(data);
                res.json(data);
            }
        }
    );
});





module.exports = router