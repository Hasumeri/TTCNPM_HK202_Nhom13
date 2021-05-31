const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/author')
const Food = require('../schemas/Food')

router.get('/', (req, res) => res.send('food'))

router.post('/', verifyToken, async(req, res) => {
    
})
module.exports = router