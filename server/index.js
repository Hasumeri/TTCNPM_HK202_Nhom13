const express = require("express");
const connectDatabase = require("./config/database")
const app = express();
const dotenv = require("dotenv");
const fs = require('fs');

dotenv.config();

connectDatabase();

const foodHandler = require("./routes/foodHandler");

app.use("/images", express.static("images"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", foodHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));