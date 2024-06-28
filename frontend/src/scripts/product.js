import Product from './products.js'
const mainContent = document.querySelector('#main-content');


fetch('./api/products/' + window.location.href.split("#")[1])
    .then(res => {
        if (res.ok) {
            return res.json()
        }
        else throw new Error('Errore nella comunicazione con il server');
    })
    .then(prod => {
        new Product(mainContent, prod).getSingleProduct(mainContent, prod)
    })
