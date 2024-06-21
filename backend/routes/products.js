const express = require('express')
const productsController = require('../controllers/products')
const path = require('path')
const bodyParser = require("body-parser");
/* const categoriaRouter = require('./categoria') */
const Product = require('../models/products')




const router = express.Router()

router.use(express.static(path.join(__dirname, '..', 'frontend', 'src')));

router.use(bodyParser.json());

/* router.use('/categoria', categoriaRouter)
 */




router.get('/all', productsController.getAllProducts)       // questo è impaginato a 8 per pagina

router.get('/allEndPoint', productsController.getAllEndPoint)     // questi sono tutti per darli al chatbot come knowledge base

router.get('/:nomeProdotto', productsController.getProductByprodName)       // route per aprire il singolo prodotto


router.post('/newProduct', productsController.postNewProduct)       // route per andare alla pagina di inserimento prodotto


/*router.get('/anguria', (req, res) => {
    Product.find({prodName: req.params.prodName})
    
    res.sendFile(path.join(__dirname, '..', 'static', 'media', 'product.html'))
}) */



//router.get('/anguria', productsController.getProductByprodName)

module.exports = router