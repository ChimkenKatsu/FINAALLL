document.addEventListener('DOMContentLoaded', () => {
    const shoppingList = document.getElementById('shopping-list');
    const totalPriceSpan = document.getElementById('shopping-total-price');
    const checkoutBtn = document.getElementById('checkout-btn'); // Checkout button reference

    // Retrieve cart data from local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;

    // Function to update shopping list
    function updateShoppingList() {
        shoppingList.innerHTML = '';
        totalPrice = 0;

        cart.forEach(item => {
            const itemLi = document.createElement('li');
            itemLi.textContent = `${item.ProductName} - $${item.Price.toFixed(2)} x ${item.Quantity}`;
            shoppingList.appendChild(itemLi);
            totalPrice += item.Price * item.Quantity;
        });

        totalPriceSpan.textContent = totalPrice.toFixed(2);
    }

    // Function to handle checkout
    function handleCheckout() {
        if (cart.length === 0) {
            alert('No items in the cart. Please add items before checking out.');
        } else {
            alert('Order Delivered! Your order has been successfully delivered.');
            // Clear the cart after successful checkout
            localStorage.removeItem('cart');
            updateShoppingList(); // Clear the displayed list
            totalPriceSpan.textContent = '0.00';
        }
    }

    // Initialize shopping list
    updateShoppingList();

    // Attach event listener to checkout button
    checkoutBtn.addEventListener('click', handleCheckout);
});
