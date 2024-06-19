const order = ["Pasta", "Pizza", "Wrap", "Shwarwma", "Pizza", "Pasta"];
const uniqueOrder = new Set(order);
console.log(uniqueOrder);

//Sets are iterable
console.log([...new Set(order)]); // unique values

//iterable
for (const item of uniqueOrder) {
  console.log(item);
}

//fucntions
console.log(uniqueOrder.has("Pizza"));
uniqueOrder.add("Pizza");
console.log(uniqueOrder);
uniqueOrder.delete("Pasta");
console.log(uniqueOrder);
