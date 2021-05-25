const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    id: {
        type: String,
        require: true,
        unique: true
    },

    status: {
        type: String,
        enum: ['waiting', 'pending', 'processing', 'completed'],
        require: true
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
})

module.exports = mongoose.model('Order', OrderSchema)