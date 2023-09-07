import { createCatalog } from "./src/card";
import { cartInitialize, cartPrice, renderCartProducts } from "./src/cart";
import { filterInitialize } from "./src/catalogfilter";


createCatalog();
cartInitialize();
renderCartProducts();
cartPrice();
filterInitialize();
