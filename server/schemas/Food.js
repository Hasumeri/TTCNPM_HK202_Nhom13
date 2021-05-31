const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FoodSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    price: {
        type: String,
        require: true
    },
    imageURL: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    availability: {
        type: Boolean,
        require: true
    }
})

module.exports = mongoose.model('Food', FoodSchema)