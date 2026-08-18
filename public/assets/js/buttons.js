const addToCartButton = document.getElementById("addToCart");
const cartCount = document.querySelector(".cart-count");

let cartItemsCount = 0;

addToCartButton.addEventListener("click", () => {
    // console.log("Produkt dodany do koszyka.");
    // addToCartButton.textContent = "Produkt dodany do koszyka";

    ++cartItemsCount;
    cartCount.textContent = cartItemsCount;

    alert("Produkt dodany do koszyka");
});
