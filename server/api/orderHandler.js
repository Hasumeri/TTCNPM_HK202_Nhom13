const express = require('express');
const { verifyTokenUser } = require('../middleware/author');
const router = express.Router()
const Order = require("../schemas/Order")
const User = require('../schemas/User')

router.get("/orders", async (req, res) => {
    const orders = await Order.find();
    res.json( {success: true, orders} );
})

router.post('/makeOrder', verifyTokenUser, async (req, res) => {
    const {cart, total} = req.body
    console.log(cart)
    try {
        const user = await User.findById(req.userId)
        if (!user) return res.json({success:false, message: 'Account not found'})
        const newOrder = new Order({listFood: cart, total: total, status: 'waiting', user: user._id})
        console.log(newOrder)
        await newOrder.save()
        res.json({success: true, message: 'Order has been placed successfully'})
    }
    catch(error) {
        console.log(error)
        res.json({success: false, message: 'Internal server error'})
    }
})
module.exports = router