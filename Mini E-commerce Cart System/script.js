// Cart array to store items
let cart = [];

// Conversion rates
const conversionRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
    INR: 83.33
};

// Function to add product to the cart
function addToCart(product) {
    const productId = product.dataset.id;
    const productName = product.querySelector('h3').textContent;
    const productPrice = parseFloat(product.dataset.price);
    const productImg = product.querySelector('img').src;

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1, img: productImg });
    }

    updateCart();
}

// Function to remove item from the cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Function to calculate total price
function calculateTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Function to update cart display
function updateCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div>
                <div>${item.name}</div>
                <div>Price: $${item.price.toFixed(2)}</div>
                <div>Quantity: ${item.quantity}</div>
                <div>Total: $${(item.price * item.quantity).toFixed(2)}</div>
                <button class="remove-from-cart-btn" data-id="${item.id}">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    document.querySelectorAll('.remove-from-cart-btn').forEach(button => {
        button.addEventListener('click', event => {
            const productId = event.target.dataset.id;
            removeFromCart(productId);
        });
    });

    const total = calculateTotal();
    document.getElementById('total-price').textContent = `$${total.toFixed(2)}`;
}

// Discount codes
const discountCodes = {
    SAVE10: 0.1,
    SAVE20: 0.2
};

// Function to apply discount
function applyDiscount(code) {
    const discount = discountCodes[code];
    if (discount) {
        const total = calculateTotal();
        const discountedTotal = total * (1 - discount);
        document.getElementById('total-price').textContent = `$${discountedTotal.toFixed(2)}`;
    } else {
        alert('Invalid discount code');
    }
}

// Currency Conversion
function convertCurrency(currency) {
    const rate = conversionRates[currency];
    const total = calculateTotal();
    const convertedTotal = total * rate;
    document.getElementById('total-price').textContent = `${currency} ${convertedTotal.toFixed(2)}`;
}

// Event Listeners
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', event => {
        const product = event.target.closest('.product');
        addToCart(product);
    });
});

document.getElementById('apply-discount-btn').addEventListener('click', () => {
    const discountCode = document.getElementById('discount-code').value;
    applyDiscount(discountCode);
});

document.getElementById('currency-selector').addEventListener('change', event => {
    const selectedCurrency = event.target.value;
    convertCurrency(selectedCurrency);
});

// Checkout functionality
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Thank you for your purchase!');
        cart = [];
        updateCart();
    }
});
