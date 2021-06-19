const express = require('express')
const cors = require('cors')
const connectDatabase = require('./config/database')
const authen = require('./api/authen')
const food = require('./api/food')
const foodHandler = require("./api/foodHandler");
const orderHandler = require("./api/orderHandler")
const searchHandler = require("./api/searchHandler");
require('dotenv').config()

connectDatabase()
const server = express()
server.use(cors())
server.use(express.json())

server.use("/images", express.static("images"));

server.use(express.urlencoded({ extended: false }));

server.use('/', food)
server.use('/api/authen', authen)
server.use('/api/foodHandler', foodHandler)
server.use('/api/orderHandler', orderHandler)


const PORT = 5000

server.listen(PORT, () => console.log(`Server started on port ${PORT}`))