const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    prodName: String,
    description: String,
    rating: Number,
    price: Number,
    imgSrc: String
})


module.exports = mongoose.model("Product", productSchema)