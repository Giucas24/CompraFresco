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
}


export default Product