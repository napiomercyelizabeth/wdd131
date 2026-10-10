const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power converters", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
  // 1. Populate product dropdown on form.html
  const selectElement = document.getElementById("product-select");
  if (selectElement) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      selectElement.appendChild(option);
    });
  }

  // 2. Handle localStorage review counter on review.html
  const reviewCountDisplay = document.getElementById("review-count-display");
  if (reviewCountDisplay) {
    let count = Number(window.localStorage.getItem("reviewCount-ls")) || 0;
    count++;
    window.localStorage.setItem("reviewCount-ls", count);
    reviewCountDisplay.textContent = count;
  }

  // 3. Footer metadata dates
  const currentYearSpan = document.getElementById("currentyear");
  const lastModifiedPara = document.getElementById("lastModified");

  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
  if (lastModifiedPara) {
    lastModifiedPara.textContent = `Last Modification: ${document.lastModified}`;
  }
});