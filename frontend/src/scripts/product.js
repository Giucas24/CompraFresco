const mainContent = document.querySelector('#main-content'); 
const prodListContainer = document.querySelector('#product-list-container')

class Product {
    constructor(mainContent, prodListContainer, product) {
        this.mainContent = mainContent;
        this.prodListContainer = prodListContainer;
        this.product = product
    }

    getAvailableProducts() {
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

    getSingleProduct() {
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
}


export default Product