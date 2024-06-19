const map = new Map();

map.set("categories", ["Pasta", "Pizza", "Wrap", "Shwarwma"]).set(1, "Me");

// console.log(map);
// console.log(map.values());
// console.log(map.keys());
// console.log(map.size);
// console.log(map.get(1));

const arr = {
  a: 1,
  b: 2,
};

map.set(arr, "This is object");

// console.log(map.get(arr));
// console.log(map.get("categories"));

const quiz = new Map([
  ["question", "What is the best programming language?"],
  [1, "C++"],
  [2, "JS"],
  [3, "Java"],
  ["correct", 2],
  [true, "Correct"],
  [false, "Try Again"],
]);

const mynum = 2;
console.log(quiz.get("question"));

for (const [key, value] of quiz) {
  if (typeof key === "number") console.log(`Option ${key} : ${value}`);
}

console.log(quiz.get(mynum === quiz.get("correct")));
