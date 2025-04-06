const searchBox = document.getElementById("search-box");
const productBoxes = document.querySelectorAll(".box");

searchBox.addEventListener("input", function () {
  const keyword = this.value.toLowerCase();

  productBoxes.forEach((box) => {
    const productName = box.querySelector("h3").textContent.toLowerCase();
    box.style.display = productName.includes(keyword) ? "block" : "none";
  });
});

document.querySelector(".search-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Biar gak reload halaman
});
