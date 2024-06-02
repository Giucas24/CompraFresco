const Product = require('./product')
const prodListContainer = document.querySelector('#product-list-container')

 /*class Product {
    constructor(prodListContainer, product) {
        /*this.prodBox = prodBox;
        this.descBox = descBox;
        this.buyContainer = buyContainer; 
        this.prodListContainer = prodListContainer;
        this.product = product;


        // CREO GLI ELEMENTI DA APPENDERE A prodContainer
        const prodContainer = document.createElement('div')
        const prodFigure = document.createElement('figure')
        const link = document.createElement('a')
        const prodImg = document.createElement('img')

        // IMPOSTO LA CLASSE
        prodContainer.setAttribute('class', 'product-container')
        prodFigure.setAttribute('class', 'prod-figure')
        prodImg.setAttribute('class', 'prod-img')
        prodImg.setAttribute('src', product.imgSrc)
        link.setAttribute('class', 'link-to-prod')
        link.setAttribute('href', './product.html#' + product.prodName) 

        // APPENDCHILD
        prodListContainer.appendChild(prodContainer)
        prodContainer.appendChild(prodFigure)
        prodFigure.appendChild(link)
        link.appendChild(prodImg)


        prodFigure.addEventListener("mouseover", () => {
            prodFigure.style.borderRadius = '30px'
            //prodFigure.style.backgroundColor = 'rgb(203 213 225)';
        })

        prodFigure.addEventListener("mouseout", () => {
            prodFigure.style.backgroundColor = '';
        })

    } 


}*/



// FETCH
fetch('./api/products/all')
.then(res => {
    if (res.ok) return res.json();
    else throw new Error('Si è verificato un errore nella comunicazione con il server');
})
.then(prod => {
    //containerElement.innerHTML = '';
    prod.forEach(e => {
        new Product(prodListContainer, e).getAvailableProducts();
    })
    
})

export default Product