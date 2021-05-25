const express = require('express')
const connectDatabase = require('./config/database')
const authentication = require('./routes/authentication')
const food = require('./routes/food')


const server = express()
server.use(express.json())
const PORT = 5000
connectDatabase()
server.use('/', food)
server.use('/authentication', authentication)

server.listen(PORT, () => console.log(`Server started on port ${PORT}`))