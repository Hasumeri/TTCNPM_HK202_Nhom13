const express = require('express')
const cors = require('cors')
const connectDatabase = require('./config/database')
const authen = require('./api/authen')
const food = require('./api/food')
require('dotenv').config()

connectDatabase()
const server = express()
server.use(cors())
server.use(express.json())

const foodHandler = require("./api/foodHandler");
const searchHandler = require("./api/searchHandler");

app.use("/images", express.static("images"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", foodHandler);
app.use("/", searchHandler);

server.use('/', food)
server.use('/api/authen', authen)

const PORT = 5000

server.listen(PORT, () => console.log(`Server started on port ${PORT}`))