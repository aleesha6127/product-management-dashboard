const API_URL = 'https://fakestoreapi.com/products';
const productGrid = document.getElementById('product-grid');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');
const loader = document.getElementById('loader');

let products = [];
let filteredProducts = [];

/**
 * Initialize the application
 */
async function init() {
    try {
        await fetchProducts();
        setupEventListeners();
    } catch (error) {
        showError('Failed to fetch products. Please try again later.');
    }
}

/**
 * Fetch products from API
 */
async function fetchProducts() {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('API Error');
    
    products = await response.json();
    filteredProducts = [...products];
    renderProducts(filteredProducts);
}

/**
 * Render product cards to the grid
 * @param {Array} items 
 */
function renderProducts(items) {
    productGrid.innerHTML = '';
    
    if (items.length === 0) {
        productGrid.innerHTML = '<div class="error-msg">No products found matching your search.</div>';
        return;
    }

    items.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="image-container">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title" title="${product.title}">${product.title}</h3>
                <span class="product-price">$${product.price.toFixed(2)}</span>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

/**
 * Filter products based on search input
 */
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm)
    );
    
    // Apply current sort to filtered results
    applySort();
    renderProducts(filteredProducts);
}

/**
 * Handle sorting logic
 */
function applySort() {
    const sortBy = sortSelect.value;
    
    if (sortBy === 'low-high') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high-low') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else {
        // Reset to original order for default sort
        const searchTerm = searchInput.value.toLowerCase().trim();
        filteredProducts = products.filter(product => 
            product.title.toLowerCase().includes(searchTerm)
        );
    }
}

/**
 * Show error message in grid
 * @param {string} msg 
 */
function showError(msg) {
    productGrid.innerHTML = `<div class="error-msg">${msg}</div>`;
}

/**
 * Event listeners setup
 */
function setupEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    sortSelect.addEventListener('change', () => {
        applySort();
        renderProducts(filteredProducts);
    });
}

// Start the app
init();
