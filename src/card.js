import { catalog } from "./utility";
import { add } from "./cart";

export function createCatalog(){
  for(const catalogProduct of catalog){
    const productCard = `<div class ="w-48 m-0.5 flex flex-col justify-between shadow-xl shadow-slate-400 rounded-lg p-2 group ${catalogProduct.woman ? "female" : "male"}" id ="card-product${catalogProduct.id}">
    <img class="group-hover:scale-110 duration-300 my-3 rounded-lg" src="assets/img/${catalogProduct.productImg}" alt="Produto 1">
    <p class = "text-sm">${catalogProduct.brand}</p>
    <p class = "text-sm">${catalogProduct.productName}</p>
    <p class = "text-sm">$${catalogProduct.price}</p>
    <button id = "add-${catalogProduct.id}" class = "bg-slate-950 text-slate-200" hover: bg-slate-700><i class="fa-solid fa-cart-plus"></i></button>
  </div>`

  document.getElementById("product-container").innerHTML += productCard;
  }

  for(const catalogProduct of catalog){
    document.getElementById(`add-${catalogProduct.id}`).addEventListener("click",() => add(catalogProduct.id));
  }
}