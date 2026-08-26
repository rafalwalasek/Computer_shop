import { products } from "./data/products.js";

// Slider
let currentSlide = 0;

const slides = [
    { path: "/assets/images/ram.jpg" },
    { path: "/assets/images/ssd.jpg" },
    { path: "/assets/images/gpu.jpg" },
    { path: "/assets/images/motherboard.avif" },
    { path: "/assets/images/case.jpg" }
];
const amountSlide = slides.length;

const slider = document.getElementById("slider");
slider.className = "slider";

    const topRow = document.createElement("div");
    topRow.className = "top-row";
    slider.appendChild(topRow);

        const arrowLeft = document.createElement("img");
        arrowLeft.src = "/assets/images/left-arrow-solid-24.png";
        arrowLeft.className = "arrow-left";
        topRow.appendChild(arrowLeft);

            arrowLeft.addEventListener("click", () => {
                currentSlide--;

                for (let i=amountSlide-1; i>=0; i--) {
                    slidersContainer.children[i].style.display = "none";
                }

                if (currentSlide < 0) {
                    currentSlide = amountSlide - 1;
                    slidersContainer.children[currentSlide].style.display = "block";
                } else {
                    slidersContainer.children[currentSlide].style.display = "block";
                }
            });

        const slidersContainer = document.createElement("div");
        slidersContainer.className = "sliders-container";
        topRow.appendChild(slidersContainer);

            for (let i=0; i<amountSlide; i++) {
                const slide = document.createElement("img");
                slide.src = slides[i].path;
                slide.className = "slide";
                slidersContainer.appendChild(slide);
            }

        const arrowRight = document.createElement("img");
        arrowRight.src = "/assets/images/right-arrow-solid-24.png";
        arrowRight.className = "arrow-right";
        topRow.appendChild(arrowRight);

            arrowRight.addEventListener("click", () => {
                currentSlide++;

                for (let i=0; i<amountSlide; i++) {
                    slidersContainer.children[i].style.display = "none";
                }

                if (currentSlide === amountSlide) {
                    currentSlide = 0;
                    slidersContainer.children[currentSlide].style.display = "block";
                } else {
                    slidersContainer.children[currentSlide].style.display = "block";
                }
            });

    const bottomRow = document.createElement("div");
    bottomRow.className = "bottom-row";
    slider.appendChild(bottomRow);

        const dots = document.createElement("div");
        dots.className = "dots";
        bottomRow.appendChild(dots);

            for (let i=0; i<amountSlide; i++) {
                const dot = document.createElement("img");
                dot.src = "/assets/images/circle-solid-24.png";
                dot.className = "dot";
                dots.appendChild(dot);

                dot.addEventListener("click", () => {
                    currentSlide = i;
                    
                    for (let j=0; j<amountSlide; j++) {
                        slidersContainer.children[j].style.display = "none";
                    }
                    
                    slidersContainer.children[currentSlide].style.display = "block";
                });
            }
// END Slider
// ------------------------------------------------------------------------------------------------
// Recommended
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
// END Recommended
