export const catalog =  [
  {
    id: "1",
    productName: "Camisa Larga com Bolsos",
    brand: "Zara",
    price: 70,
    productImg: "product-1.jpg",
    woman: false,
  },
  {
    id: "2",
    productName: "Casaco Reto com Lã",
    brand: "Zara",
    price: 110,
    productImg: "product-2.jpg",
    woman: true,
  },
  {
    id: "3",
    productName: "Jaqueta com Efeito Camurça",
    brand: "Zara",
    price: 60,
    productImg: "product-3.jpg",
    woman: false,
  },
  {
    id: "4",
    productName: "Sobretudo em Mescla de Lã",
    brand: "Zara",
    price: 160,
    productImg: "product-4.jpg",
    woman: false,
  },
  {
    id: "5",
    productName: "Camisa Larga Acolchoada de Veludo Cotelê",
    brand: "Zara",
    price: 110,
    productImg: "product-5.jpg",
    woman: false,
  },
  {
    id: "6",
    productName: "Casaco de Lã com Botões",
    brand: "Zara",
    price: 170,
    productImg: "product-6.jpg",
    woman: true,
  },
  {
    id: "7",
    productName: "Casaco com Botões",
    brand: "Zara",
    price: 75,
    productImg: "product-7.jpg",
    woman: true,
  },
  {
    id: "8",
    productName: "Colete Comprido com Cinto",
    brand: "Zara",
    price: 88,
    productImg: "product-8.jpg",
    woman: true,
  }
]

export function savelocalStorage(key, info){
  localStorage.setItem(key, JSON.stringify(info));
}
export function readlocalStorage(key){
  return JSON.parse(localStorage.getItem(key));
}
export function deletelocalStorage(key){
  localStorage.removeItem(key);
}

export function createBasicCartProducts(productId,idHtmlContainer,productQuantity){
  const product = catalog.find(p=>p.id === productId);
  const productsCartContainer = document.getElementById(idHtmlContainer);

  const articleElement = document.createElement("article");
  const articleClasses = ["flex", "bg-stone-200", "rounded-lg", "p-1", "relative", "mb-2", "w-96"]
  
  for (const articleClass of articleClasses){
    articleElement.classList.add(articleClass);
  }

  const productCard = `<img src="assets/img/${product.productImg}" class="h-24 rounded-lg">
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">${product.productName}</p>
      <p class="text-green-700 text-lg">$${product.price}</p>
    </div>
    <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
      <p id = "counter-${product.id}">${productQuantity}</p>
    </div>`;
  
    articleElement.innerHTML = productCard;
    productsCartContainer.appendChild(articleElement);
}