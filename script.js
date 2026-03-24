// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Cart Functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.querySelectorAll('.add-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.closest('.painting-card').dataset.product;
        const product = {
            id: productId,
            title: this.closest('.painting-info').querySelector('h3').textContent,
            price: this.closest('.painting-info').querySelector('.price').textContent
        };
        
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showNotification('Added to cart!');
    });
});

function updateCartCount() {
    const count = cart.length;
    document.querySelector('.cart-count').textContent = count;
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--antique-gold);
        color: var(--deep-brown);
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 10000;
        animation: slideIn