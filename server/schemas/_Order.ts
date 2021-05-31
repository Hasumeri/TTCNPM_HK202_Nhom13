const mongoose = require('mongoose')
const Schema = mongoose.Schema

enum Status {
    Waiting = "waiting", // Waiting to be process?
    Pending = "pending", // Waiting to be process?
    Processing = "processing", // Being Process at Kitchen
    Completed = "completed", // Complete
}

class OrderItem {
    'use strict'
    private itemID: string;
    private price: number;
    private quantity: number;

    constructor(id, qty = 1, price: 0) {
        this.itemID = id;
        this.quantity = qty;
        this.price = price;
    }
}

const OrderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    cart: {
        type: Object,
        required: true
    },

    status: {
        type: String,
        enum: ['waiting', 'pending', 'processing', 'completed'],
        require: true
    },

})

module.exports.OrderSchema = mongoose.model('order', OrderSchema);
module.exports.OrderItem = OrderItem;
module.exports.Status = Status;