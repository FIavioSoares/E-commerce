import { readlocalStorage, createBasicCartProducts } from "./utility";

function createOrderHistory(order){
  const orderElement = `<p class = "text-xl text-bold ,y-4">${new Date(order.date).toLocaleDateString("pt-BR", {hour: "2-digit", minute: "2-digit" })}</p>
  <section id ="orders-container-${order.date}" class = "bg-slate-300 p-3 rounded-md"></section>`;
  const main = document.getElementsByTagName("main")[0];
  main.innerHTML += orderElement;

  for(const productId in order.products){
  createBasicCartProducts(productId, `orders-container-${order.date}`, order.products[productId])
  }
}

function renderOrderHistory(){
  const history = readlocalStorage("history");
  for( const order of history){
    createOrderHistory(order);
  }
}

renderOrderHistory();