const mainContent = document.querySelector('#main-content'); 
const prodListContainer = document.querySelector('#product-list-container')

export default class Product {
    constructor(mainContent, product) {
        this.mainContent = mainContent;
        this.product = product
    }

    getAvailableProducts(prodListContainer, product) {
                // CREO GLI ELEMENTI DA APPENDERE A prodContainer
                const prodContainer = document.createElement('div')
                const prodFigure = document.createElement('figure')
                const link = document.createElement('a')
                const prodImg = document.createElement('img')
                const prodName = document.createElement('p')
                const prodDetails = document.createElement('div')
                const prodCategory = document.createElement('p')
                const prodPrice = document.createElement('p')
        
                // IMPOSTO LA CLASSE
                prodContainer.setAttribute('class', 'product-container')
                prodFigure.setAttribute('class', 'prod-figure')
                prodImg.setAttribute('class', 'prod-img')
                ////prodImg.setAttribute('src', this.product.imgSrc)
                prodImg.setAttribute('src', product.imgSrc)
                link.setAttribute('class', 'link-to-prod')
                ////link.setAttribute('href', './product.html#' + this.product.prodName) 
                link.setAttribute('href', './product.html#' + product.nomeProdotto) 
                prodName.setAttribute('class', 'prod-name')
                prodDetails.setAttribute('class', 'prod-details')
                prodCategory.setAttribute('class', 'prod-category')
                prodPrice.setAttribute('class', 'prod-price')
        
                // APPENDCHILD
                prodListContainer.appendChild(prodContainer)
                prodContainer.appendChild(prodFigure)
                prodFigure.appendChild(link)
                link.appendChild(prodImg)
                //prodContainer.appendChild(prodName)
                prodContainer.appendChild(prodDetails)
                prodDetails.appendChild(prodCategory)
                prodDetails.appendChild(prodName)
                prodDetails.appendChild(prodPrice)

                ////let nameNormal = this.product.prodName;
                let nameNormal = product.nomeProdotto;
                let nameUpperFirst = nameNormal[0].toUpperCase() + nameNormal.slice(1);
                prodName.textContent = nameUpperFirst;

                prodCategory.textContent= product.categoria;
                ////prodPrice.textContent = this.product.price + ' €';
                prodPrice.textContent = product.prezzo + ' €';
        
        
                prodFigure.addEventListener("mouseover", () => {
                    prodFigure.style.borderRadius = '30px'
                    //prodFigure.style.backgroundColor = 'rgb(203 213 225)';
                })
        
                prodFigure.addEventListener("mouseout", () => {
                    prodFigure.style.backgroundColor = '';
                })

                return product;
    }


    getSingleProduct(mainContent, product) {
                // CREO GLI ELEMENTI
                const prodBox = document.createElement('div');
                const descBox = document.createElement('div');
                //const buyContainer = document.createElement('div');
                const figure = document.createElement('figure');
                const img = document.createElement('img');
                const descUl = document.createElement('ul');
                const prodNameBox = document.createElement('div');
                const prodName = document.createElement('span');
                const reviewNumber = document.createElement('span')
                const description = document.createElement('li');
                /* const rating = document.createElement('li'); */
                const price = document.createElement('li');
        
                // Quantità
                const quantityBox = document.createElement('div');
                const quantityButton = document.createElement('div');
                const minButton = document.createElement('button');
                const minIcon = document.createElement('i');
                const plusButton = document.createElement('button');
                const plusIcon = document.createElement('i');
                const quantity = document.createElement('p');
                // Aggiungi al carrello
                const cartBox = document.createElement('div');
                const cartText = document.createElement('p');
                const cartIcon = document.createElement('i');
                // Preferiti
                const saveBox = document.createElement('button');
                const saveIcon = document.createElement('i');
                // Venditore, categoria e problemi 
                const lowerBox = document.createElement('div');
                const sellerBox = document.createElement('div');
                const sellerText = document.createElement('span');
                const sellerName = document.createElement('span');
                const categoryContainer = document.createElement('div');
                const categoryText = document.createElement('span');
                const categoryName = document.createElement('span');
                const ratingBox = document.createElement('div');
                const rating = document.createElement('span');
                const problemBox = document.createElement('div');
                const problemIcon = document.createElement('i');
                const problemText = document.createElement('span');
        
                // IMPOSTO LE CLASSI
                prodBox.setAttribute('id', 'prod-box');     // box immagine
                descBox.setAttribute('id', 'desc-box');     // box descrizione
               // buyContainer.setAttribute('id', 'buy-container');       // box aggiungi al carrello
                figure.setAttribute('class', 'prod-figure-single');
                img.setAttribute('src', this.product.imgSrc);
                img.setAttribute('class', 'prod-img-single')
                descUl.setAttribute('class', 'desc-ul');
                prodNameBox.setAttribute('class', 'prod-name-box')
                prodName.setAttribute('id', 'prod-name-single');
                reviewNumber.setAttribute('class', 'review-number')
                description.setAttribute('id', 'description');
                rating.setAttribute('class', 'rating');
                price.setAttribute('id', 'price');
                // Quantità
                quantityBox.setAttribute('class', 'quantity-box');
                quantityButton.setAttribute('class', 'quantity-button')
                minButton.setAttribute('class', 'min-button');
                minIcon.setAttribute('class','fa-solid fa-minus');
                plusButton.setAttribute('class', 'plus-button');
                plusIcon.setAttribute('class','fa-solid fa-plus');
                quantity.setAttribute('class', 'quantity');
                // Aggiungi al carrello
                cartBox.setAttribute('class', 'cart-box')
                cartText.setAttribute('class', 'cart-text')
                cartIcon.setAttribute('class', 'fa-solid fa-basket-shopping cart-icon')
                // Preferiti
                saveBox.setAttribute('class', 'save-box')
                saveIcon.setAttribute('class', 'fa-solid fa-heart save-icon')
                // Venditore, categoria e problemi 
                lowerBox.setAttribute('class', 'lower-box')
                sellerText.setAttribute('class', 'seller-text')
                sellerName.setAttribute('class', 'seller-name')
                categoryText.setAttribute('class', 'category-text')
                categoryName.setAttribute('class', 'category-name')
                sellerBox.setAttribute('class', 'seller-box')
                categoryContainer.setAttribute('class', 'category-container')
                problemBox.setAttribute('class', 'problem-box')
                problemIcon.setAttribute('class', 'fa-solid fa-circle-exclamation problem-icon')
                problemText.setAttribute('class', 'problem-text')
        
                // APPEND CHILD
                mainContent.appendChild(prodBox);
                mainContent.appendChild(descBox);
                //mainContent.appendChild(buyContainer);
                prodBox.appendChild(figure);
                figure.appendChild(img);
                descBox.appendChild(descUl);
                descUl.appendChild(prodNameBox);
                prodNameBox.appendChild(prodName);
                prodNameBox.appendChild(rating);
                prodNameBox.appendChild(reviewNumber);
                descUl.appendChild(price);
                descUl.appendChild(description);
                //descUl.appendChild(price);
                descBox.appendChild(quantityBox);
                // Quantità
                quantityBox.appendChild(quantityButton)
                quantityButton.appendChild(minButton);
                minButton.appendChild(minIcon)
                quantityButton.appendChild(quantity);
                quantityButton.appendChild(plusButton);
                plusButton.appendChild(plusIcon)
                // Aggiungi al carrello
                quantityBox.appendChild(cartBox)
                cartBox.appendChild(cartText)
                cartBox.appendChild(cartIcon)
                // Preferiti
                quantityBox.append(saveBox);
                saveBox.appendChild(saveIcon);
                // Venditore, categoria e problemi 
                descBox.appendChild(lowerBox);
                lowerBox.appendChild(sellerBox);
                sellerBox.appendChild(sellerText)
                sellerBox.appendChild(sellerName)
                lowerBox.appendChild(categoryContainer)
                categoryContainer.appendChild(categoryText)
                categoryContainer.appendChild(categoryName)
                lowerBox.appendChild(problemBox)
                problemBox.appendChild(problemIcon)                
                problemBox.appendChild(problemText)                
                


                // TEXT CONTEXT
                let nameNormal = product.nomeProdotto;
                let nameUpperFirst = nameNormal[0].toUpperCase() + nameNormal.slice(1);
                prodName.textContent = nameUpperFirst;
                description.textContent = product.descrizione;
                this.printRating(rating, this.product.valutazione);             
                price.textContent = product.prezzo + ' €/kg';
                quantity.textContent = 1;
                let currQuantity = 1;

                reviewNumber.textContent = '(' + product.numeroRecensioni + ' Recensioni)';

                // Azienda, categoria e problemi 
                sellerText.textContent = 'Venditore: ';
                sellerName.textContent = product.nomeVenditore;
                categoryText.textContent = 'Categoria: ';
                categoryName.textContent = product.categoria;
                problemText.textContent = 'Segnala un problema per questo articolo'

                // Aggiungi al carrello
                cartText.textContent = 'AGGIUNGI';
        
                
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

                return product
            }

            printRating(element, ratingValue) {
                if (Number.isInteger(ratingValue)) {
                    for (let i = 0; i < ratingValue; i++) {
                        const checkedStar = document.createElement('i');
                        checkedStar.setAttribute('class', 'fa-solid fa-star');
                        checkedStar.setAttribute('style', 'color: #FFD43B;');
                        element.appendChild(checkedStar);
                    }
            
                    let diff = 5 - ratingValue;
                    for (let i = 0; i < diff; i++) {
                        const uncheckedStar = document.createElement('i');
                        uncheckedStar.setAttribute('class', 'fa-solid fa-star');
                        element.appendChild(uncheckedStar);
                    }
                } else {
                    let ratingValueInteger = ratingValue - 0.5;
                    for (let i = 0; i < ratingValueInteger; i++) {
                        const checkedStar = document.createElement('i');
                        checkedStar.setAttribute('class', 'fa-solid fa-star');
                        checkedStar.setAttribute('style', 'color: #FFD43B;');
                        element.appendChild(checkedStar);
                    }

                    const checkedStar = document.createElement('i');
                    checkedStar.setAttribute('class', 'fa-solid fa-star-half-stroke');
                    checkedStar.setAttribute('style', 'color: #FFD43B;');
                    element.appendChild(checkedStar);

                    let diff = 5 - ratingValue;
                    if (diff > 0.5) {
                        for (let i = 0; i < Math.trunc(diff); i++) {
                            const uncheckedStar = document.createElement('i');
                            uncheckedStar.setAttribute('class', 'fa-solid fa-star');
                            element.appendChild(uncheckedStar);
                        }
                    }
                    
                }
                
            }

            /* printRating(element, ratingValue) {
                for (let i = 0; i < ratingValue; i++) {
                    const checkedStar = document.createElement('i');
                    checkedStar.setAttribute('class', 'fa-solid fa-star');
                    checkedStar.setAttribute('style', 'color: #FFD43B;');
                    element.appendChild(checkedStar);
                }
        
                let diff = 5 - ratingValue;
                for (let i = 0; i < diff; i++) {
                    const uncheckedStar = document.createElement('i');
                    uncheckedStar.setAttribute('class', 'fa-solid fa-star');
                    element.appendChild(uncheckedStar);
                }
            } */


            

            /* printRating(rating) {
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
            } */
}



fetch('./api/products/allEndPoint')
.then(res => {
    if (res.ok) return res.json();
    else throw new Error('Si è verificato un errore nella comunicazione con il server');
})
.then(prod => {
    //containerElement.innerHTML = '';
    prod.forEach(e => {
        new Product(prodListContainer, e).getAvailableProducts(prodListContainer, prod)
    })
    
})