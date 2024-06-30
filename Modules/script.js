// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import { cloneDeep } from "lodash-es";

const shopping = {
  cart: [
    { item: "Pizza", quantity: 4 },
    { item: "Cake", quantity: 9 },
  ],

  user: { loggedIn: true },
};

const newshopping = cloneDeep(shopping);
shopping.user.loggedIn = false;
console.log(newshopping);

if (module.hot) {
  module.hot.accept();
}
