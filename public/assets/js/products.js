import { cart } from "./cart.js";
import { products } from "./data/products.js";

const productsGrid = document.getElementById("productsGrid");
productsGrid.className = "products-grid";

const cartCountElement = document.querySelector(".cart-count");
const searchInput = document.querySelector(".search-input");

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
function renderProducts(productsToRender) {
    productsGrid.innerHTML = "";

    if (productsToRender.length === 0) {
        productsGrid.innerHTML = "Nie znaleziono produktów.";
    }

    productsToRender.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}
function getCategories(products) {
    const categories = new Set();
    products.forEach(product => {
        categories.add(product.category);
    });

    return categories;
}
function createCategoryButtons(categories, products, categoriesContainer) {
    categories.forEach(category => {
        const categoryButton = document.createElement("button");
        categoryButton.className = "category-button";
        categoryButton.textContent = category;

        categoriesContainer.appendChild(categoryButton);

        categoryButton.addEventListener("click", () => {
            const filteredProducts = products.filter(product => {
                return product.category === category;
            });

            renderProducts(filteredProducts);
        });
    });
}
function createAllProductsButton(products, categoriesContainer) {
    const allProductsButton = document.createElement("button");
    allProductsButton.className = "all-products-button";
    allProductsButton.textContent = "Wszystkie";

    categoriesContainer.appendChild(allProductsButton);

    allProductsButton.addEventListener("click", () => {
        renderProducts(products);
    });
}
function normalizeSearchValue(value) {
    return value.toLowerCase().trim();
}

// --------------------------------------------------------------------------------------------------------

const categoriesContainer = document.createElement("div");
categoriesContainer.className = "categories-container";

productsGrid.parentNode.insertBefore(categoriesContainer, productsGrid);

renderProducts(products);

searchInput.addEventListener("input", () => {
    const searchValue = normalizeSearchValue(searchInput.value);

    const filteredProducts = products.filter(product => {
        return normalizeSearchValue(product.name).includes(searchValue) ||
            normalizeSearchValue(product.category).includes(searchValue);
    });

    renderProducts(filteredProducts);
});

const categories = getCategories(products);

createAllProductsButton(products, categoriesContainer);
createCategoryButtons(categories, products, categoriesContainer);
