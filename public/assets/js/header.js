// const { link } = require("fs");

const headerContainer = document.getElementById("headerContainer");
headerContainer.className = "header-container";

const header = document.createElement("header");
header.className = "header";

    const logoLink = document.createElement("a");
    logoLink.className = "logo-link";

        const logoImage = document.createElement("img");
        logoImage.className = "logo-image";
        logoImage.src = "assets/images/logo.png";
        const logoName = document.createElement("span");
        logoName.className = "logo-name";
        logoName.textContent = "Computer Shop";

        logoLink.appendChild(logoImage);
        logoLink.appendChild(logoName);

    const searchContainer = document.createElement("div");
    searchContainer.className = "search-container";

        const searchInput = document.createElement("input");
        searchInput.className = "search-input";
        searchInput.placeholder = "Szukaj produktu...";
        const searchButton = document.createElement("button");
        searchButton.className = "search-button";
        searchButton.textContent = "Szukaj";

        searchContainer.appendChild(searchInput);
        searchContainer.appendChild(searchButton);

    const cartLink = document.createElement("div");
    cartLink.className = "cart-link";

        const cartLabel = document.createElement("p");
        cartLabel.className = "cart-label";
        cartLabel.textContent = "Koszyk";
        const cartCount = document.createElement("span");
        cartCount.className = "cart-count";
        cartCount.textContent = "0";

        cartLink.appendChild(cartLabel);
        cartLink.appendChild(cartCount);

    header.appendChild(logoLink);
    header.appendChild(searchContainer);
    header.appendChild(cartLink);

const navLinks = [
    {
        linkName: "Strona główna",
        path: "/"
    },
    {
        linkName: "Produkty",
        path: "products.html"
    },
    {
        linkName: "Koszyk",
        path: "cart.html"
    }
];
const nav = document.createElement("nav");
nav.className = "nav";

    navLinks.forEach(navLink => {
        const navLinkElement = document.createElement("a");
        navLinkElement.className = "nav-link-element";
        
        navLinkElement.textContent = navLink.linkName;
        navLinkElement.href = navLink.path;
    
        nav.appendChild(navLinkElement);
    });

headerContainer.appendChild(header);
headerContainer.appendChild(nav);
