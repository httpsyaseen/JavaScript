class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //works as a property
  get Age() {
    return this.age;
  }

  //works as a function
  //   Age() {
  //     return this.age;
  //   }
}

const yaseen = new Person("Yaseen", 21);
console.log(yaseen.__proto__);
console.log(Person.prototype);

//////////////
class Laxman {
  constructor(fullname, age) {
    this.fullname = fullname;
    this.age = age;
  }

  get fullname() {
    return this._fullname;
  }

  set fullname(name) {
    if (name.includes(" ")) this._fullname = name;
  }
}

const laxman = new Laxman("Yaseen Nazir", 21);
const laxman2 = new Laxman("Mehar Aziz", 20);

console.log(laxman);
console.log(laxman.fullname);
console.log(laxman2);
