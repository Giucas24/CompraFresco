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
        
                // IMPOSTO LA CLASSE
                prodContainer.setAttribute('class', 'product-container')
                prodFigure.setAttribute('class', 'prod-figure')
                prodImg.setAttribute('class', 'prod-img')
                prodImg.setAttribute('src', this.product.imgSrc)
                link.setAttribute('class', 'link-to-prod')
                link.setAttribute('href', './product.html#' + this.product.prodName) 
                prodName.setAttribute('class', 'prodName')
        
                // APPENDCHILD
                prodListContainer.appendChild(prodContainer)
                prodContainer.appendChild(prodFigure)
                prodFigure.appendChild(link)
                link.appendChild(prodImg)
                prodContainer.appendChild(prodName)

                let nameNormal = this.product.prodName;
                let nameUpperFirst = nameNormal[0].toUpperCase() + nameNormal.slice(1);
                prodName.textContent = nameUpperFirst;
        
        
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
                img.setAttribute('src', this.product.imgSrc);
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
                this.printRating(rating, this.product.rating);             
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

                return product
            }

            printRating(element, ratingValue) {
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
            }


            

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


