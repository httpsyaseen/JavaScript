const Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  return 2024 - this.birthYear;
};

const Student = function (name, birthYear, degree) {
  Person.call(this, name, birthYear);
  this.degree = degree;
};

//creating a function in student prototype
Student.prototype.introduce = function () {
  console.log(`Hi, my name is ${this.name}`);
};

//it will delete the current stuent prototype and return a new obj {} and the new object is linked with the Person Prototype
Student.prototype = Object.create(Person.prototype);

//now the new obj {} (Student.Prototype) that is linkedd with Person will store the functions
Student.prototype.introduce = function () {
  console.log(`Hi, my name is ${this.name}`);
};

//Now it thinks that the Student is a Person Type object because when we link prototype the old Student.prototype deletes and then it contructor points to Person
console.log(Student.prototype.constructor);

//linking the constructor to student constructor again for correctness
Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);

const yaseen = new Student("Yaseen Nazir", 2003, "Software Engineer");

console.log(yaseen);
console.log(yaseen.__proto__);
console.log(yaseen.__proto__.__proto__);
console.log(yaseen.calcAge());
console.log(Person.prototype.constructor);
