const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  orderDelivery: function ({ ...obj }) {
    console.log(arguments);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
//Array destructuring
const [first, , third] = restaurant.starterMenu;
console.log(first, third);

//Object destructuring
const { name: RestaurantName, starterMenu: Menu } = restaurant;
console.log(RestaurantName, Menu);
console.log({ ...restaurant.openingHours });

//default values to prevent errors
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating
let a = 10;
let b = 20;
const obj = { a: 100, b: 200 };
({ a, b } = obj); //wraping around parathensis because obj cannot be assigned to block scope
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);

//function destructuring
const random = { age: 10, name: "yaseen" };
restaurant.orderDelivery(random);
