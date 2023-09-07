import { createBasicCartProducts, readlocalStorage, deletelocalStorage, savelocalStorage} from "./utility";
import { cartPrice } from "./cart";

function createCheckoutproducts() {
  const cart = readlocalStorage("cart") ?? {};
  for( const productId in cart){
    createBasicCartProducts(productId, "checkout-products-container", cart[productId]);
  }
}



function buy(evt){
  evt.preventDefault();
  const cart = readlocalStorage("cart") ?? {};
  if( Object.keys(cart).length === 0 ) {
    return
  }
  const date = new Date();
  const order = {
  date: date,
  products: cart

  }

  const orderHistory = readlocalStorage("history") ?? [];
  const updatedOrderHistory = [order, ...orderHistory];

  savelocalStorage("history", updatedOrderHistory);
  deletelocalStorage("cart");

  window.location.href = "./orders.html";
}

createCheckoutproducts();
cartPrice();

document.addEventListener("submit",(evt) => buy(evt));