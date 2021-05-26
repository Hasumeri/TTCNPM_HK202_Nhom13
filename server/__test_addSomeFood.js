console.log("Add some Foods to database for testing...");
const FoodSchema = require("./models/FoodSchema")
const mongoose = require("mongoose");
require("dotenv").config()

db = process.env.MONGODB

mongoose.connect(db,
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    () => console.log("DB connected"));

var list = [
    {
        foodID: "20201",
        name: "Sườn heo hun khói",
        price: 299000,
        imageURL: "images/suonheohunkhoi.jpg",
        type: "Main",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        avail: true
    },
    {
        foodID: "20202",
        foodID: "20202",
        name: "Cá hời áp chảo",
        price: 256000,
        type: "Main",
        imageURL: "images/cahoiapchao.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        avail: true
    },
    {
        foodID: "20203",
        name: "Gà",
        price: 156000,
        imageURL: "images/ga.png",
        type: "Main",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        avail: true
    },
    {
        foodID: "20204",
        name: "Rượu vang",
        price: 140000,
        type: "Beverage",
        imageURL: "images/ruouvang.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        avail: true
    },
    {
        foodID: "20205",
        name: "Cocktail",
        price: 120000,
        imageURL: "images/cocktail.jpg",
        type: "Beverage",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        avail: true
    },
    {
        foodID: "20206",
        name: "Mojito",
        price: 110000,
        imageURL: "images/mojito.jpg",
        type: "Beverage",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        avail: true
    },
]

for (i = 0; i < list.length; i++) {
    console.log(list[i]);
    const {
        foodID,
        name,
        price,
        imageURL,
        type,
        description,
        avail
    } = list[i];
    (new FoodSchema({
        foodID,
        name,
        price,
        imageURL,
        type,
        description,
        avail
    })).save();
}

mongoose.connection.close();