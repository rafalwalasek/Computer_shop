const cartGrid = document.getElementById("cartGrid");
// cartGrid.className = "cart-grid";

JSON.parse(localStorage.getItem("cart")).forEach(cartItems => {
    const cardItem = document.createElement("div");
    cardItem.className = "card-item";

        const cartImage = document.createElement("img");
        cartImage.className = "cart-image";
        cartImage.src = cartItems.image;

        const cartName = document.createElement("h3");
        cartName.className = "cart-name";
        cartName.textContent = cartItems.name;

        const cartPrice = document.createElement("p");
        cartPrice.className = "cart-price";
        cartPrice.textContent = cartItems.price + " zł";

        cardItem.appendChild(cartImage);
        cardItem.appendChild(cartName);
        cardItem.appendChild(cartPrice);

    cartGrid.appendChild(cardItem);
});
