import { products } from "./data/products.js";

const recommendedGrid = document.getElementById("recommendedGrid");
recommendedGrid.className = "recommended-grid";

for (let i=0; i<4; i++) {
    const product = products[i];

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

    recommendedGrid.appendChild(productCard);
}
