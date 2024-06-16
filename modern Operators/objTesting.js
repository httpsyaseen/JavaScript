const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

let test = 29;

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  orderDelivery: function ({ ...obj }) {
    console.log(arguments);
  },

  openingHours,
  test,
};

openingHours.sun = 100;
test = 200;

console.log(restaurant);

//new way of method
const restaurant2 = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  orderDelivery({ ...obj }) {
    console.log(arguments);
  },
};

//chaining operator
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of weekdays) {
  const open = restaurant?.openingHours[day]?.open ?? "closed";
  console.log(`we are open on ${day} at ${open}`);
}
