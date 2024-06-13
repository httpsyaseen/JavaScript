const starterMenu = ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"];
const mainMenu = ["Pizza", "Pasta", "Risotto"];
const str = "Yaseen";
console.log(...mainMenu);
console.log(...str);
const random = [...str];
console.log(random);

//////////////
const Person = {
  name: "yaseen",
  age: 21,
  skills: ["React", "Node JS"],
};
const newPerson = { degree: "Software Engineering", ...Person };
console.log(newPerson);

const thirdPerson = { ...newPerson };
thirdPerson.gpa = 3.56;
console.log(thirdPerson);

/////////////

function logging(ar, ar2, ar3) {
  console.log(ar, ar2, ar3);
}
logging(...str);

/////////
const arr = [1, 2, ...[3, 4]];
console.log(arr);

/////////
function write(...starterMenu) {
  console.log(starterMenu);
}
write({
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
});
