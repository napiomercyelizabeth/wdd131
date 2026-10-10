const featuredItems = [
  {
    name: "Lira Samosa",
    price: "UGX 2,500",
    image: "images/samosa.webp",
    description: "Crispy pastry filled with savory local vegetables."
  },
  {
    name: "Fresh Fruit Smoothie",
    price: "UGX 3,000",
    image: "images/smoothie.webp",
    description: "A chilled blend of tropical fruits and yogurt."
  },
  {
    name: "Chapati Wrap",
    price: "UGX 4,000",
    image: "images/wrap.webp",
    description: "Soft chapati filled with grilled chicken and greens."
  },
  {
    name: "Mango Juice",
    price: "UGX 2,000",
    image: "images/mango.webp",
    description: "Fresh, sweet, and naturally refreshing."
  }
];

const menuGrid = document.querySelector("#menu-grid");
if (menuGrid) {
  menuGrid.innerHTML = featuredItems
    .map(
      (item) => `
        <article class="menu-card">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          <div class="menu-card-content">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span class="price">${item.price}</span>
          </div>
        </article>
      `
    )
    .join("");
}

const currentYear = document.querySelector("#currentyear");
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const lastModified = document.querySelector("#lastModified");
if (lastModified) {
  lastModified.textContent = `Last modified: ${document.lastModified}`;
}

const orderForm = document.querySelector("#order-form");
if (orderForm) {
  orderForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = document.querySelector("#form-status");
    if (status) {
      status.textContent = "Thank you! Your order has been received.";
      status.style.color = "#1f7a4d";
    }
    orderForm.reset();
  });
}