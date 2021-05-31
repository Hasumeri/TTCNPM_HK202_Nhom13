const express = require('express')
const router = express.Router()
const FoodSchema = require("../schemas/Food")

// Menu Handler
router.get("/foods", async (req, res) => {
    const food = await FoodSchema.find();
    res.json(food);
});


router.get("/foods/:foodID", async (req, res) => {
    await FoodSchema.findOne({ foodID: req.params.foodID },
        (err, data) => {
            if (err) {
                return res.send(500, 'Something Went wrong with Retrieving data');
            } else {
                res.json(data);
            }
        }
    );
});

module.exports = router