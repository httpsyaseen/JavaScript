//short-circuit
let value = "Yaseen" && 10 && 0;
console.log(value);

//nullish
let guests;
const numberOfGuests = guests ?? 10; // works same as or if there is no Nullish value Nullish value = null and undefined and work as condition if it is a nullish value
console.log(numberOfGuests);
