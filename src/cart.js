import { catalog, savelocalStorage, readlocalStorage } from "./utility";

const cart = readlocalStorage("cart") ?? {};

function open(){
  document.getElementById("cart").classList.remove("right-[-22.5rem]");
  document.getElementById("cart").classList.add("right-[0]");
  
}

function close(){
  document.getElementById("cart").classList.remove("right-[0]");
  document.getElementById("cart").classList.add("right-[-22.5rem]");
}

function goToCheckout(){
  if(Object.keys(cart).length === 0){
    return
  }
  window.location.href =  "./checkout.html";
}

export function cartInitialize(){
  const cartCloseBtn = document.getElementById("cart-close");
  const cartOpenBtn = document.getElementById("cart-open");
  const goToCheckoutBtn = document.getElementById("checkout");

  cartCloseBtn.addEventListener("click", close);
  cartOpenBtn.addEventListener("click", open);
  goToCheckoutBtn.addEventListener("click", goToCheckout);
}

function remove(productId){
  delete cart[productId];
  savelocalStorage("cart", cart);
  cartPrice();
  renderCartProducts();
}

function cartIncrease(productId){
  cart[productId]++;
  savelocalStorage("cart", cart);
  cartPrice();
  updateCounter(productId);
}

function cartDecrease(productId){
  if(cart[productId] === 1){
    remove(productId);
    return
  }
  cart[productId]--;
  savelocalStorage("cart", cart);
  cartPrice();
  updateCounter(productId);
}

function updateCounter(productId){
  document.getElementById(`counter-${productId}`).innerText = cart[productId];
}

function createCartProducts(productId){
  const product = catalog.find(p=>p.id === productId);
  const productsCartContainer = document.getElementById("cart-products");

  const articleElement = document.createElement("article");
  const articleClasses = ["flex", "bg-slate-100", "rounded-lg", "p-1", "relative"]
  
  for (const articleClass of articleClasses){
    articleElement.classList.add(articleClass);
  }

  const productCard = `<button id="remove-${product.id}" class="absolute top-0 right-2"><i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i></button>
    <img src="assets/img/${product.productImg}" class="h-24 rounded-lg">
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">${product.productName}</p>
      <p class="text-green-700 text-lg">$${product.price}</p>
    </div>
    <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
      <button id="product-decrease-${product.id}" class="mr-2">-</button>
      <p id = "counter-${product.id}">${cart[product.id]}</p>
      <button id="product-increase-${product.id}" class="ml-2">+</button>
    </div>`;
  
  articleElement.innerHTML = productCard;
  productsCartContainer.appendChild(articleElement);

  document.getElementById(`product-decrease-${product.id}`).addEventListener('click',() => cartDecrease(product.id))
  document.getElementById(`product-increase-${product.id}`).addEventListener('click',() => cartIncrease(product.id))
  document.getElementById(`remove-${product.id}`).addEventListener('click',() => remove(product.id))
}

export function renderCartProducts(productId){
  const productsCartContainer = document.getElementById("cart-products");
  productsCartContainer.innerHTML = "";
  for(const productId in cart){
    createCartProducts(productId);
  }
  
}

export function add(productId){
  if(productId in cart){
    cartIncrease(productId);
    return;
  }
  cart[productId] = 1;
  savelocalStorage("cart", cart);
  createCartProducts(productId);
  cartPrice();
}

export function cartPrice(){
  const price = document.getElementById("total-price");
  let totalPrice = 0;
  for(const x in cart){
    totalPrice += catalog.find((p) => p.id === x).price * cart[x];
  }
  price.innerText = `Total: $${totalPrice}`;
}