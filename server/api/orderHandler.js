const express = require('express')
const router = express.Router()
const OrderSchema = require("../schemas/Order")

router.get("/orders/:userId", async (req, res) => {
    const orders = await OrderSchema.find();
    res.json( {success: true, orders} );
})

router.post("/makeOrder", async (req, res) => {

})
module.exports = router