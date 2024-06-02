const Product = require('../models/products')
const path = require('path')


module.exports = {
    getAllProducts: (req,res) => {
        Product.find({})
        .then(r => res.json(r))
    },


    getProductByprodName: (req, res) => {
        Product.findOne({prodName: req.params.prodName})
        .then(r => res.json(r))
        //res.sendFile(path.join(__dirname, '..' , 'static', 'media' , 'product.html'))
        
    },



    
}
