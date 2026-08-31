function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
}

function showCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartDiv = document.getElementById("cart");

    if (cart.length === 0) {
        cartDiv.innerHTML = "<h3>Your cart is empty.</h3>";
        return;
    }

    let total = 0;
    let html = "";

    cart.forEach((item, index) => {
        total += item.price;

        html += `
            <p>
                ${item.name} - ₹${item.price}
                <button onclick="removeItem(${index})">Remove</button>
            </p>
        `;
    });

    html += `<hr><h2>Total: ₹${total}</h2>`;

    cartDiv.innerHTML = html;
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    showCart();
}