import { cart } from "./cart.js";

const productsGrid = document.getElementById("productsGrid");
productsGrid.className = "products-grid";

const products = [
    {
        id: 1,
        image: "assets/images/gpu.webp",
        name: "RTX 5070",
        price: 3500,
        category: "GPU",
        available: true
    },
    {
        id: 2,
        image: "assets/images/cpu.webp",
        name: "Ryzen 7",
        price: 1800,
        category: "CPU",
        available: true
    },
    {
        id: 3,
        image: "assets/images/ram.webp",
        name: "Patriot 32GB",
        price: 1900,
        category: "RAM",
        available: true
    },
    {
        id: 4,
        image: "assets/images/m2.webp",
        name: "Lexar 1TB",
        price: 650,
        category: "M.2",
        available: true
    }
];

const cartCountElement = document.querySelector(".cart-count");

products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.className = "product-image";

        const productName = document.createElement("h3");
        productName.textContent = product.name;
        productName.className = "product-name";

        const productPrice = document.createElement("p");
        productPrice.textContent = product.price + " zł";
        productPrice.className = "product-price";

        const productCategory = document.createElement("p");
        productCategory.textContent = product.category;
        productCategory.className = "product-category";

        const productAvailable = document.createElement("p");
        productAvailable.className = "product-available";
        if (product.available === true) {
            productAvailable.textContent = "Dostepny";
        } else {
            productAvailable.textContent = "Brak";
        }

        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Dodaj do koszyka";
        addToCartButton.className = "add-to-cart-button";

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(productCategory);
        productCard.appendChild(productAvailable);
        productCard.appendChild(addToCartButton);

    productsGrid.appendChild(productCard);

    addToCartButton.addEventListener("click", () => {
        cart.push(product);
        console.log(cart);

        cartCountElement.textContent = cart.length;
    });
});
