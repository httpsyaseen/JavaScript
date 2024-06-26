function Person(name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
}

Person.prototype.skills = ["C++", "Python", "Javascript"];

const yaseen = new Person("Yaseen Nazir", 21);
const abdullah = new Person("Abdullah Nazir", 19);

console.log(yaseen.skills);
console.log(abdullah.skills);
console.log(yaseen.skills === abdullah.skills);

console.log(yaseen.__proto__ === Person.prototype);
console.log(yaseen.__proto__ === abdullah.__proto__);

Person.__proto__.degree = "CS";

console.log(Person.degree);
console.log(Person.__proto__);
console.log(Object.prototype);
console.log(Person.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [1, 2, 3, 4, 5];

console.log(arr.__proto__);

console.log(arr.__proto__ === Array.prototype);
console.log(yaseen instanceof Person);
console.log(arr instanceof Array);
