const productsCatalog = document.getElementById("product-container");

function showAll() {
  const hiddenProducts = Array.from(productsCatalog.getElementsByClassName("hidden"))

  for (const product of hiddenProducts){
    product.classList.remove("hidden");
  }
}

function hiddenM() {
  showAll();
  const maleProducts = Array.from(productsCatalog.getElementsByClassName("male"));
  for(const product of maleProducts) {
    product.classList.add("hidden");
  }
}
function hiddenF() {
  showAll();
  const femaleProducts = Array.from(productsCatalog.getElementsByClassName("female"));
  for(const product of femaleProducts) {
    product.classList.add("hidden");
  }
}

export function filterInitialize() {
  document.getElementById("show-all").addEventListener("click", showAll);
  document.getElementById("show-male").addEventListener("click", hiddenF);
  document.getElementById("show-female").addEventListener("click", hiddenM);
}