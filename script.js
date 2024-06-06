document.addEventListener('mousemove', function(e) {
    const pizza = document.getElementById('pizza');
    const rect = pizza.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    pizza.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
});

let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        header.style.top = '-70px';
    } else {
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});

const cart = [];
const taxRate = 0.13;
const onlineFeeRate = 0.02;

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price;
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartContainer.appendChild(itemElement);
    });
    const tax = subtotal * taxRate;
    const onlineFee = subtotal * onlineFeeRate;
    const total = subtotal + tax + onlineFee;

    const summary = `
        Subtotal: $${subtotal.toFixed(2)}<br>
        Tax (13%): $${tax.toFixed(2)}<br>
        Online Fee (2%): $${onlineFee.toFixed(2)}<br>
        Total: $${total.toFixed(2)}
    `;
    const summaryElement = document.createElement('div');
    summaryElement.innerHTML = summary;
    cartContainer.appendChild(summaryElement);

    const checkoutButton = document.createElement('button');
    checkoutButton.textContent = 'Pay Now';
    checkoutButton.addEventListener('click', () => {
        alert('This is not a real website');
    });
    cartContainer.appendChild(checkoutButton);
}
