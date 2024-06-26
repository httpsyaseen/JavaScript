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
