import Product from './prodotti.js'
/* const prodBox = document.querySelector('#prod-box');
const descBox = document.querySelector('.desc-box');
const buyContainer = document.querySelector('.buy-container'); */
const mainContent = document.querySelector('#main-content'); 


/* class Product {
    constructor(mainContent, product) {
        //this.prodBox = prodBox;
        //this.descBox = descBox;
        //this.buyContainer = buyContainer; 
        this.mainContent = mainContent;
        this.product = product;

        // CREO GLI ELEMENTI
        const prodBox = document.createElement('div');
        const descBox = document.createElement('div');
        const buyContainer = document.createElement('div');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const descUl = document.createElement('ul');
        const prodName = document.createElement('li');
        const description = document.createElement('li');
        const rating = document.createElement('li');
        const price = document.createElement('li');

        // Quantità
        const quantityBox = document.createElement('div');
        const minButton = document.createElement('button');
        const minIcon = document.createElement('i');
        const plusButton = document.createElement('button');
        const plusIcon = document.createElement('i');
        const quantity = document.createElement('p');

        // IMPOSTO LE CLASSI
        prodBox.setAttribute('id', 'prod-box');     // box immagine
        descBox.setAttribute('id', 'desc-box');     // box descrizione
        buyContainer.setAttribute('id', 'buy-container');       // box aggiungi al carrello
        figure.setAttribute('class', 'prod-figure');
        img.setAttribute('src', product.imgSrc);
        img.setAttribute('class', 'prod-img')
        descUl.setAttribute('class', 'desc-ul');
        prodName.setAttribute('class', 'prod-name');
        description.setAttribute('class', 'description');
        rating.setAttribute('class', 'rating');
        price.setAttribute('class', 'price');
        quantityBox.setAttribute('class', 'quantity-box');
        minButton.setAttribute('class', 'min-button');
        minIcon.setAttribute('class','fa-solid fa-minus');
        plusButton.setAttribute('class', 'plus-button');
        plusIcon.setAttribute('class','fa-solid fa-plus');
        quantity.setAttribute('class', 'quantity');

        // APPEND CHILD
        mainContent.appendChild(prodBox);
        mainContent.appendChild(descBox);
        mainContent.appendChild(buyContainer);
        prodBox.appendChild(figure);
        figure.appendChild(img);
        descBox.appendChild(descUl);
        descUl.appendChild(prodName);
        descUl.appendChild(description);
        descUl.appendChild(rating);
        descUl.appendChild(price);
        descBox.appendChild(quantityBox);
        quantityBox.appendChild(minButton);
        minButton.appendChild(minIcon)
        quantityBox.appendChild(quantity);
        quantityBox.appendChild(plusButton);
        plusButton.appendChild(plusIcon)


        // TEXT CONTEXT
        let nameNormal = product.prodName;
        let nameUpperFirst = nameNormal[0].toUpperCase() + nameNormal.slice(1);
        prodName.textContent = nameUpperFirst;
        description.textContent = product.description;
        this.printRating(rating);
       // rating.textContent = product.rating;
        price.textContent = product.price + ' €';
        quantity.textContent = 1;
        let currQuantity = 1;

        
        minButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (currQuantity > 1) {
                //let firstQuantity = parseInt(quantity.textContent);
                currQuantity = currQuantity - 1;
                quantity.textContent = currQuantity;
            }
        })

        plusButton.addEventListener('click', (e) => {
            e.preventDefault();
            //let firstQuantity = parseInt(quantity.textContent);
            currQuantity = currQuantity + 1;
            quantity.textContent = currQuantity;
        })


    }


    printRating(rating) {
        this.product.rating.forEach(value => {
            if(value == 1) {
                const checkedStar = document.createElement('i');
                checkedStar.setAttribute('class', 'fa-solid fa-star')
                checkedStar.setAttribute('style', 'color: #FFD43B;')
                rating.appendChild(checkedStar);
            } else {
                const uncheckedStar = document.createElement('i');
                uncheckedStar.setAttribute('class', 'fa-solid fa-star')
                rating.appendChild(uncheckedStar);
            }
        })
    }

} */


/* fetch('./product.json')
.then(res => res.json())
.then(data => {
    const prodArray = data.products;
    prodArray.forEach(prod => {
        new Product(mainContent, prod)
    })
})
.then(res => console.log(JSON.stringify(res))) */

fetch('../api/products/' + window.location.href.split("#")[1])
.then(res => {
    if (res.ok) {
        res = res.json()
        return res
    }
    else throw new Error('Si è verificato un errore nella comunicazione con il server');
})
.then(prod => {
    console.log(prod);
    //containerElement.innerHTML = '';
        new Product(mainContent, prod).getSingleProduct(mainContent, prod)
    
    
})

