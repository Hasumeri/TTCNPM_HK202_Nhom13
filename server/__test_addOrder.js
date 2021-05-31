const {OrderSchema, OrderItem, Status} = require("./schemas/Order");
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
    () => console.log("DB connected")
);

let obj = [new OrderItem("20201", 2, 299000),
    new OrderItem("20205", 2, 120000)
];

(new OrderSchema({
            user: "60b48ff350b1e81e24e0e509",
            cart: obj,
            status: Status.Pending
        }
    )
).save().then(_ => {
    console.log(this)
    mongoose.connection.close().then(_ => _)
});
