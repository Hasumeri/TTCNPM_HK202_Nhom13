const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/authorization')
const Food = require('../models/Food')

router.get('/', (req, res) => res.send('food'))

router.post('/', verifyToken, async(req, res) => {
    
})
module.exports = router