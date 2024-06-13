const yaseen = {
  age: 30,
};

const me = yaseen;

me.age = 40;

const random = {
  age: 100,
};

// console.log(yaseen.age);
// console.log(me.age);

//copy (shallow)

const yaseen2 = Object.assign({}, yaseen); //only shallow copy

yaseen2.age = 89;

console.log(yaseen.age);
console.log(yaseen2.age);
