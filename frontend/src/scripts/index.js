import Product from './products.js'
const prodListContainer = document.querySelector('#product-list-container')
const prodNumber = document.querySelector('.prod-number')


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
            const fetchResult = await fetch(`./api/products/all?page=${page}&limit=${limit}&filter=${filterValue}`);
            if (!fetchResult.ok) {
                throw new Error('Errore nel fetch dei prodotti');
            }

            const data = await fetchResult.json();
            prodNumber.textContent = data.totalProducts + ' Prodotti in catalogo'


            displayProducts(data.products);
            updatePaginationButtons(data);

            if (page !== 1) {
                document.body.scrollTop = document.documentElement.scrollTop = 420;
            } else {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            }


        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    function displayProducts(productsArray) {
        productsContainer.innerHTML = '';
        productsArray.forEach(product => {
            const productInstance = new Product(prodListContainer, product);
            productInstance.getAvailableProducts(prodListContainer, product);
        });
    };

    function updatePaginationButtons(data) {
        page1Button.textContent = '1';
        page2Button.textContent = '2';
        page3Button.textContent = '3';

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
            fetchProducts(currentPage, filter.value);
        };
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

    // Fetch iniziale in pagina 1 e senza filtro
    fetchProducts(currentPage);

});



