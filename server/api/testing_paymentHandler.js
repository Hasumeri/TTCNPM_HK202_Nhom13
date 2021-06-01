const express = require('express')
const router = express.Router()


router.post("/push", async (req, res) => {
    const {
        user,
        cart,
        status
    } = req.body;

});


module.exports = router