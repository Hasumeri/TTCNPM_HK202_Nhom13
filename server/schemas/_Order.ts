const mongoose = require('mongoose')
const Schema = mongoose.Schema

enum Status {
    Waiting = "Waiting",
    Pending = "Pending",
    Processing = "Processing",
    Completed = "Completed",
}

class OrderItem {
    'use strict'
    private itemID: string;
    private quantity: number;
    private status: Status;
    constructor(id, qty, stat) {
        this.itemID = id;
        this.quantity = qty;
        this.status = stat;
    }
}

const OrderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    cart: {
        type: OrderItem, // Object
        required: true
    },

    status: {
        type: String,
        enum: ['waiting', 'pending', 'processing', 'completed'],
        require: true
    },

})

module.exports = mongoose.model('Order', OrderSchema)