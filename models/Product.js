const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String
    },
    provider: {
        type: String
    },
    expirationDate: {
        type: String
    },
    measurability: {
        type: String
    },
    quantity: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('Product', ProductSchema)