const {OrderSchema, OrderItem, Status} = require("./schemas/Order")
const UserSchema = require("./schemas/User")
const FoodSchema = require("./schemas/Food")

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

let itemList = [
    {
        itemID: "20201",
        itemPrice: 299000,
        qty: 2
    },
    {
        itemID: "20205",
        itemPrice: 120000,
        qty: 2
    }]

itemList.forEach(
    async (item) => {
        let it = await FoodSchema.findOne({foodID: item.itemID})
        console.log(it)
    }
)

async function query(cb) {
    let user =
        await OrderSchema.findOne({_id: "60b64939231bfe5634f83d48"})
            .populate("user")
    cb(user);
}

// query((usr) => {
//     console.log(usr)
//     mongoose.connection.close().then(_ => console.log("connection closed"));
// });






