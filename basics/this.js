const jonas = {
  age: 30,
  calAge: function () {
    return 100 - this.age;
  },
};

// console.log(jonas.calAge());

const yaseen = {
  age: 21,
};

yaseen.calAge = jonas.calAge; //proves that this keyword is always points to the object while we are borrowing the method form jonas

// console.log(yaseen.calAge());

//self/that

const person = {
  age: 30,
  ageCal: function (a, b) {
    console.log(arguments);
    const self = this; //we can use this approach
    const ageCal = () => 200 - self.age;
    console.log(ageCal());
    return 100 - this.age;
  },
};

console.log(person.ageCal(10, 20));
