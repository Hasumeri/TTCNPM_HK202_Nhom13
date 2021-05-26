const express = require('express')
const router = express.Router()
const FoodSchema = require("../models/FoodSchema")
const verifyToken = require('../middleware/authorization')


router.get("/search", async (req, res) => {
    console.log("ALL")
    const food = await FoodSchema.find();
    res.json(food);
});



module.exports = router