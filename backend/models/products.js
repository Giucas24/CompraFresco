const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    prodName: String,
    description: String,
    rating: Array,
    price: Number
})


module.exports = mongoose.model("Product", productSchema)