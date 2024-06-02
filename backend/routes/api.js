const express = require('express')
const prodRouter = require('./products')

const router = express.Router()

router.use('/products', prodRouter)


module.exports = router