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
    },
    {
        id: 5,
        image: "assets/images/gpu-amd-1.webp",
        name: "Gigabyte Radeon RX 7600",
        price: 1500,
        category: "GPU",
        available: true
    },
    {
        id: 6,
        image: "assets/images/mb-1.webp",
        name: "ASUS TUF GAMING B850-PLUS WIFI",
        price: 900,
        category: "Motherboard",
        available: true
    },
    {
        id: 7,
        image: "assets/images/cpu-intel-1.webp",
        name: "Intel Core i5-14400F",
        price: 750,
        category: "CPU",
        available: true
    },
    {
        id: 8,
        image: "assets/images/ram-2.webp",
        name: "Kingston FURY 32GB",
        price: 2250,
        category: "RAM",
        available: true
    }
];

const cartCountElement = document.querySelector(".cart-count");

products.forEach(product => {
    const productCard = createProductCard(product);
    productsGrid.appendChild(productCard);
});

// wyszukiwarka
const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("input", () => {
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchInput.value.toLowerCase().trim()) ||
            product.category.toLowerCase().includes(searchInput.value.toLowerCase().trim());
    });

    productsGrid.innerHTML = "";

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = "Nie znaleziono produktów.";
    }

    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
});

function createProductCard(product) {
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

    addToCartButton.addEventListener("click", () => {
        cart.push(product);
        console.log(cart);

        cartCountElement.textContent = cart.length;
    });

    return productCard;
}