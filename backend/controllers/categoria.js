const Product = require('../models/products')

module.exports = {
    getFrutta: async (req, res) => {
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
            const products = await Product.find({categoria: 'frutta'}).limit(limit).skip(startIndex);

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
    }
}