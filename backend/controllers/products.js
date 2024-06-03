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

    postNewProduct: async (req, res) => {
        console.log(req.body);
        const data = new Product({
            prodName: req.body.prodName,
            description: req.body.description,
            rating: req.body.rating,
            price: req.body.price,
            imgSrc: req.body.path
        });

        const val = await data.save();
        res.json(val);
    }



    
}
