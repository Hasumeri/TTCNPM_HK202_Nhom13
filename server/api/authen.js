const express = require('express')
require('dotenv').config()
const router = express.Router()
const argon2 = require('argon2')
const jsonwebtoken = require('jsonwebtoken')

const User = require('../schemas/User')
const verifyToken = require('../middleware/author')

router.post('/signup', async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.findOne({email: email})
        if (user)
            return res.json({success: false, message: 'Email has already been used'})
        const hashedPassword = await argon2.hash(password)
        const newUser = new User({email: email, password: hashedPassword})
        await newUser.save()
        res.json({success: true, message: 'Account has been created succesfully'})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: 'Internal server error'})
    }
})

router.post('/signin', async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.findOne({email: email})
        if (!user)
            return res.json({success: false, message: 'Email or password is not correct'})
        const validPassword = await argon2.verify(user.password, password)
        if (!validPassword)
            return res.json({success: false, message: 'Email or password is not correct'})
        const encodedToken = jsonwebtoken.sign({userId: user._id}, process.env.ACCESS_TOKEN_SECRET)
        res.json({success: true, message: 'Sign in succesfully', encodedToken})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: 'Internal server error'})
    }
})

router.get('/', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password')
        if (!user) return res.json({success: false, message: 'User not found'})
        res.json({success: true, user})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router