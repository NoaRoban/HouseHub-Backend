const mongoose = require('mongoose')

const itemCardSchema = new mongoose.Schema({
       description: {
        type: String,
        required: false,
    },
    fullAddress: {
        type: String,
        required: false,
    },
    imageUrl: {
        type: String,
        required: false,
        default: ''
    },
    price: {
        type: Number,
        required: false,
    },
    status: {
        type: Boolean,
        required: false,
        default: false,
    },
    city: {
        type: String
    },
    house_size: {
        type: Number,
        required: false,
    },
})
module.exports = mongoose.model('ItemCard', itemCardSchema)