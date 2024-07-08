// Array of objects representing products with details like ID, name, category, price, and stock.
const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1500, stock: 10 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 800, stock: 20 },
    { id: 3, name: 'Headphones', category: 'Electronics', price: 100, stock: 30 },
    { id: 4, name: 'T-shirt', category: 'Clothing', price: 20, stock: 50 },
    { id: 5, name: 'Jeans', category: 'Clothing', price: 50, stock: 40 },
    { id: 6, name: 'Sneakers', category: 'Clothing', price: 80, stock: 30 },
    { id: 7, name: 'Backpack', category: 'Accessories', price: 40, stock: 25 },
    { id: 8, name: 'Watch', category: 'Accessories', price: 60, stock: 20 },
    { id: 9, name: 'Sunglasses', category: 'Accessories', price: 30, stock: 35 }
];

// Función para mostrar productos en la página web.
function displayProducts(productsToDisplay) {
    const productsContainer = document.getElementById('products-container'); // Selecciona el contenedor de productos en la página.
    productsContainer.innerHTML = ''; // Limpia el contenido anterior del contenedor.
    productsToDisplay.forEach(product => { // Itera sobre cada producto en el arreglo proporcionado.
        const productElement = document.createElement('div'); // Crea un nuevo elemento div para cada producto.
        productElement.className = 'product'; // Asigna la clase 'product' al div creado.
        // Establece el contenido del div, incluyendo ID, nombre, precio y stock del producto y un botón para verificar disponibilidad.
        productElement.innerHTML = `
            ID: ${product.id}, Nombre: ${product.name}, Precio: ${product.price}, Stock: ${product.stock}
            <button onclick="checkAvailability(${product.stock})">Verificar Disponibilidad</button>
        `;
        productsContainer.appendChild(productElement); // Agrega el div del producto al contenedor de productos.
    });
}

// Función para calcular el precio total de todos los productos.
function calculateTotalPrice() {
    const totalPrice = products.reduce((total, product) => total + product.price, 0); // Suma los precios de todos los productos.
    document.getElementById('total-display').value = `Precio Total: $${totalPrice}`; // Muestra el precio total en un elemento.
}

// Función para calcular el stock total de todos los productos.
function calculateTotalStock() {
    const totalStock = products.reduce((total, product) => total + product.stock, 0); // Suma el stock de todos los productos.
    document.getElementById('total-display').value = `Stock Total: ${totalStock}`; // Muestra el stock total en un elemento.
}

// Función para filtrar productos por categoría.
function filterByCategory() {
    const category = document.getElementById('category-filter').value; // Obtiene la categoría seleccionada por el usuario.
    const filteredProducts = category ? products.filter(product => product.category === category) : products; // Filtra los productos que coincidan con la categoría seleccionada.
    displayProducts(filteredProducts); // Muestra los productos filtrados.
}

// Función para buscar un producto por su nombre.
function searchProduct() {
    const productName = document.getElementById('search-box').value.toLowerCase(); // Obtiene el nombre del producto buscado y lo convierte a minúsculas.
    const foundProducts = products.filter(product => product.name.toLowerCase().includes(productName)); // Filtra los productos que incluyan el nombre buscado.
    displayProducts(foundProducts); // Muestra los productos encontrados.
}

// Función para verificar la disponibilidad de un producto basado en su stock.
function checkAvailability(stock) {
    alert(stock > 0 ? "Producto disponible" : "Producto no disponible"); // Muestra una alerta de disponibilidad.
}

// Función que se ejecuta al cargar la página.
window.onload = () => {
    displayProducts(products); // Muestra todos los productos al cargar la página.
};