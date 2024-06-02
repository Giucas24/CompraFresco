const express = require('express')
const productsController = require('../controllers/products')
const path = require('path')
const bodyParser = require("body-parser");
const Product = require('../models/products')


const router = express.Router()

router.use(express.static(path.join(__dirname, '..', 'frontend', 'src')));

router.use(bodyParser.json());



router.get('/all', productsController.getAllProducts)


router.get('/:prodName', productsController.getProductByprodName)

router.post('/newProduct', (req, res) => {
    
})

/*router.get('/anguria', (req, res) => {
    Product.find({prodName: req.params.prodName})
    
    res.sendFile(path.join(__dirname, '..', 'static', 'media', 'product.html'))
}) */



//router.get('/anguria', productsController.getProductByprodName)

module.exports = router