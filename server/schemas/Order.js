const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    listFood: [{
        foodName: {
            type: String,
            required: true,
            unique: true,
        },
        quantity: {
            type: Number,
            required:true
        },
        price: {
            type: Number,
            required: true
        },
        amount: {
            type: Number,
            required: true
        }
    }],

    total: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        enum: ['waiting', 'pending', 'processing', 'completed'],
        required: true
    },

    createAt: {
        type: Date,
        default: Date.now
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

})

module.exports = mongoose.model('Order', OrderSchema)