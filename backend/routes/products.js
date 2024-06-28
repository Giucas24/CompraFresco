const express = require('express')
const productsController = require('../controllers/products')
const path = require('path')
const bodyParser = require("body-parser");
const Product = require('../models/products')


const router = express.Router()

router.use(express.static(path.join(__dirname, '..', 'frontend', 'src')));
router.use(bodyParser.json());





router.get('/all', productsController.getAllProducts)       // questo è impaginato a 8 per pagina

router.get('/allEndPoint', productsController.getAllEndPoint)     // questi sono tutti per darli al chatbot come knowledge base

router.get('/:nomeProdotto', productsController.getProductByprodName)       // route per aprire il singolo prodotto


router.post('/newProduct', productsController.postNewProduct)       // route per andare alla pagina di inserimento prodotto



module.exports = router