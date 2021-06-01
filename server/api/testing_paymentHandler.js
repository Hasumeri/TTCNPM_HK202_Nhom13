const express = require('express')
const router = express.Router()
const {OrderSchema, OrderItem, Status} = require("../schemas/Order")

router.post("/push", async (req, res) => {
    const {
        user,
        cart
    } = req.body;
    let status = Status.Pending;

});


module.exports = router