const express = require('express')
const productsController = require('../controllers/products')
const path = require('path')
const bodyParser = require("body-parser");
const Product = require('../models/products')
const categoriaController = require('../controllers/categoria')




const router = express.Router()

router.use(express.static(path.join(__dirname, '..', 'frontend', 'src')));

router.use(bodyParser.json());



router.get('/frutta', categoriaController.getFrutta)





module.exports = router