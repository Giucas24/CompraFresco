const Product = require('../models/products')
const path = require('path')



module.exports = {
    getAllEndPoint: async (req, res) => {
        const prodotti = await Product.find({});
        const numeroProdotti = await Product.countDocuments();
        res.json({
            prodotti,
            numeroProdotti
        })
    },

    getAllProducts: async (req, res) => {
        const { page = 1, limit = 8, filter = '' } = req.query;
        const query = {};

        if (filter && filter !== 'tutti-i-prodotti') {
            if (['frutta', 'verdura', 'ortaggio', 'tubero'].includes(filter)) {
                query.categoria = filter;
            } else if (['Sapori della Terra', 'Delizie del Campo'].includes(filter)) {
                query.nomeVenditore = filter.replace('_', ' ');
            }
        }

        try {
            const products = await Product.find(query)
                .skip((page - 1) * limit)
                .limit(Number(limit));

            const totalProducts = await Product.countDocuments(query);
            const totalPages = Math.ceil(totalProducts / limit);

            res.json({
                products,
                totalProducts,
                currentPage: Number(page),
                totalPages,
            });
        } catch (error) {
            res.status(500).send(error)
        }
    },




    getProductByprodName: (req, res) => {
        Product.findOne({ nomeProdotto: req.params.nomeProdotto })
            .then(r => res.json(r))

    },

    postNewProduct: async (req, res) => {
        const data = new Product({
            nomeProdotto: req.body.nomeProdotto,
            categoria: req.body.categoria,
            prezzo: req.body.prezzo,
            metodoColtivazione: req.body.metodoColtivazione,
            descrizione: req.body.descrizione,
            provenienza: req.body.provenienza,
            indirizzoTerreno: req.body.indirizzoTerreno,
            stagionalita: req.body.stagionalita,
            nomeVenditore: req.body.nomeVenditore,
            imgSrc: '../public/img/' + req.body.nomeProdotto.toLowerCase() + '.png',
            valutazione: '4',
            numeroRecensioni: '17'
        });

        const val = await data.save();
        res.json(val);
    }




}
