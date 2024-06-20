const Product = require('../models/products')
const path = require('path')



module.exports = {
    /* getAllProducts: (req,res) => {
        Product.find({})
        .then(r => res.json(r))
    }, */

    getAllProducts: async (req,res) => {
        const page = parseInt(req.query.page) || 1; // pagina corrente, default è 1
        const limit = parseInt(req.query.limit) || 8; // numero di prodotti per pagina, default è 8
        /* console.log('pagina corrente: ' + page);
        console.log('limite: ' + limit); */

        try {
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;
            /* console.log('indice di inizio: ' + startIndex);
            console.log('indice di fine: ' + endIndex); */

            // Recupera i prodotti dal database con paginazione
            const products = await Product.find().limit(limit).skip(startIndex);
            
            // Conta il numero totale di prodotti (per calcolare il numero di pagine totali)
            const totalProducts = await Product.countDocuments();
            /* console.log('numero di prodotti: ' + totalProducts); */

            res.json({
                totalProducts: totalProducts,
                totalPages: Math.ceil(totalProducts / limit),
                currentPage: page,
                products: products,
              });


        } catch (err) {
            res.status(500).json({ error: err.message });
          }
    },


    getProductByprodName: (req, res) => {
        Product.findOne({nomeProdotto: req.params.nomeProdotto})
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
            imgSrc: req.body.imgSrc
        });

        const val = await data.save();
        res.json(val);
    }



    
}
