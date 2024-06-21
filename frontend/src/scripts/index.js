import Product from './products.js'
const prodListContainer = document.querySelector('#product-list-container')
const prodNumber = document.querySelector('.prod-number')

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
/*  document.addEventListener('DOMContentLoaded', () => {
    let currentPage = 1;
    const limit = 8;


    const productsContainer = document.querySelector('#product-list-container');
    const prevPageButton = document.querySelector('#prev-page');
    const page1Button = document.querySelector('#page-1');
    const page2Button = document.querySelector('#page-2');
    const page3Button = document.querySelector('#page-3');
    const nextPagesButton = document.querySelector('#next-pages');
    

    const pageButtons = [prevPageButton, page1Button, page2Button, page3Button, nextPagesButton];

    const fetchProducts = async (page) => {
        
        try {
            const response = await fetch(`./api/products/all?page=${page}&limit=${limit}`);
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }

            const data = await response.json();
            displayProducts(data.products);
            updatePaginationControls(data);
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const displayProducts = (products) => {
        console.log(products);
        productsContainer.innerHTML = '';
        products.forEach(product => {
            const productInstance = new Product(prodListContainer, product);
            productInstance.getAvailableProducts(prodListContainer, product);
        });
    };
    
    const updatePaginationControls = (data) => {
        page1Button.textContent = '1';
        page2Button.textContent = '2';
        page3Button.textContent = '3';

        // Aggiorno lo stato dei bottoni
        prevPageButton.disabled = currentPage === 1;
        page1Button.disabled = currentPage === 1;
        page2Button.disabled = currentPage === 2;
        page3Button.disabled = currentPage === 3;

        nextPagesButton.disabled = currentPage >= data.totalPages;
        

        // Aggiorno lo stile dei bottoni
        pageButtons.forEach(button => {
            button.classList.remove('active-page');
        });

        // Aggiungo la classe active-page al pulsante corrente
        if (data.currentPage === 1) {
            page1Button.classList.add('active-page');
        } else if (data.currentPage === 2) {
            page2Button.classList.add('active-page');
        } else if (data.currentPage === 3) {
            page3Button.classList.add('active-page');
        } else {
            nextPagesButton.classList.add('active-page');
        }


    };

    prevPageButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            fetchProducts(currentPage);
        }
    });

    page1Button.addEventListener('click', () => {
        currentPage = 1;
        fetchProducts(currentPage);
    });

    page2Button.addEventListener('click', () => {
        currentPage = 2;
        fetchProducts(currentPage);
    });

    page3Button.addEventListener('click', () => {
        currentPage = 3;
        fetchProducts(currentPage);
    });

    nextPagesButton.addEventListener('click', () => {
        currentPage++;
        fetchProducts(currentPage);
    });

    // Fetch the initial set of products
    fetchProducts(currentPage);

});  */


document.addEventListener('DOMContentLoaded', () => {
    let currentPage = 1;
    const limit = 8;


    const productsContainer = document.querySelector('#product-list-container');
    const prevPageButton = document.querySelector('#prev-page');
    const page1Button = document.querySelector('#page-1');
    const page2Button = document.querySelector('#page-2');
    const page3Button = document.querySelector('#page-3');
    const nextPagesButton = document.querySelector('#next-pages');
    const filter = document.querySelector('#filter')
    

    const pageButtons = [prevPageButton, page1Button, page2Button, page3Button, nextPagesButton];

    const fetchProducts = async (page, filterValue = '') => {
        
        try {
            const response = await fetch(`./api/products/all?page=${page}&limit=${limit}&filter=${filterValue}`);
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }

            const data = await response.json();
            const products = data.products || [];

            displayProducts(data.products);
            updatePaginationControls(data);

            // PER MOSTRARE NUMERO DI PRODOTTI, DICE IL NUMERO DI PRODOTTI DELLA PAGINA NON IL TOTALE
            /* updateProductCount(products.length) */
            if (page !== 1) {
                document.body.scrollTop = document.documentElement.scrollTop = 420;
            } else {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            }

            
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const displayProducts = (products) => {
        productsContainer.innerHTML = '';
        products.forEach(product => {
            const productInstance = new Product(prodListContainer, product);
            productInstance.getAvailableProducts(prodListContainer, product);
        });
    };
    
    const updatePaginationControls = (data) => {
        page1Button.textContent = '1';
        page2Button.textContent = '2';
        page3Button.textContent = '3';

        // Aggiorno lo stato dei bottoni
        prevPageButton.disabled = currentPage === 1;
        page1Button.disabled = currentPage === 1;
        page2Button.disabled = currentPage === 2;
        page3Button.disabled = currentPage === 3;

        nextPagesButton.disabled = currentPage >= data.totalPages;
        

        // Aggiorno lo stile dei bottoni
        pageButtons.forEach(button => {
            button.classList.remove('active-page');
        });

        // Aggiungo la classe active-page al pulsante corrente
        if (data.currentPage === 1) {
            page1Button.classList.add('active-page');
        } else if (data.currentPage === 2) {
            page2Button.classList.add('active-page');
        } else if (data.currentPage === 3) {
            page3Button.classList.add('active-page');
        } else {
            nextPagesButton.classList.add('active-page');
        }


    };

    // PER MOSTRARE NUMERO DI PRODOTTI, DICE IL NUMERO DI PRODOTTI DELLA PAGINA NON IL TOTALE
    /* const updateProductCount = (count) => {
        prodNumber.textContent = `${count} Prodotti in catalogo`
    } */

    prevPageButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            fetchProducts(currentPage, filter.value);
        }
    });

    page1Button.addEventListener('click', () => {
        currentPage = 1;
        fetchProducts(currentPage, filter.value);
    });

    page2Button.addEventListener('click', () => {
        currentPage = 2;
        fetchProducts(currentPage, filter.value);
    });

    page3Button.addEventListener('click', () => {
        currentPage = 3;
        fetchProducts(currentPage, filter.value);
    });

    nextPagesButton.addEventListener('click', () => {
        currentPage++;
        fetchProducts(currentPage, filter.value);
    });

    filter.addEventListener('change', () => {
        currentPage = 1;
        fetchProducts(currentPage, filter.value)
    })

    // Fetch the initial set of products
    fetchProducts(currentPage);

}); 








/* fetch('./api/products/all')
.then(res => {
    if (res.ok) return res.json();
    else throw new Error('Si è verificato un errore nella comunicazione con il server');
})
.then(prod => {
    //containerElement.innerHTML = '';
    prod.forEach(e => {
        new Product(prodListContainer, e).getAvailableProducts(prodListContainer, prod)
    })
    
}) */

