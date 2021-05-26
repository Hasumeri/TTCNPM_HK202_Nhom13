const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const jsonwebtoken = require('jsonwebtoken')
const User = require('../models/User')
require('dotenv').config()

router.get('/', (req, res) => res.send('authentication'))

router.post('/register', async(req, res) => {
    const {email, password} = req.body
    if (!email || !password)
        return res.status(400).json({success:false, message: 'Please enter email and password'})
    try {
        const user = await User.findOne({email: email})
        if (user)
            return res.status(400).json({success:false, message: 'Email has already been used'})
        const hashedPassword = await argon2.hash(password)
        const newUser = new User({email: email, password: hashedPassword})
        await newUser.save()
        const accessToken = jsonwebtoken.sign({userId: newUser._id}, process.env.ACCESS_TOKEN_SECRET)
        res.json({success: true, message: 'Succesfully', accessToken})
    }
    catch(error) {
        console.log(error)
        res.status(500).json({success: false, message: 'Internal server error'})
    }
})

router.post('/login', async(req, res) => {
    const {email, password} = req.body
    if (!email || !password)
        return res.status(400).json({success:false, message: 'Please enter email and password'})
    try {
        const user = await User.findOne({email: email})
        if (!user)
            return res.status(400).json({success:false, message: 'Email or password is not correct'})
        const validPassword = await argon2.verify(user.password, password)
        if (!validPassword)
            return res.status(400).json({success:false, message: 'Email or password is not correct'})
        const accessToken = jsonwebtoken.sign({userId: user._id}, process.env.ACCESS_TOKEN_SECRET)
        res.json({success: true, message: 'Log in succesfully', accessToken})
    }
    catch(error) {
        console.log(error)
        res.status(500).json({success: false, message: 'Internal server error'})
    }
})

module.exports = router