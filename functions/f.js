const n = "yaseen";
console.log(n.slice(1, 3));
console.log(n.split(""));

//sorting
const teams = [
  { teamName: "Team A", score: 42 },
  { teamName: "Team I", score: 89 },
  { teamName: "Team B", score: 75 },
  { teamName: "Team D", score: 58 },
  { teamName: "Team C", score: 30 },
  { teamName: "Team H", score: 47 },
  { teamName: "Team E", score: 91 },
  { teamName: "Team G", score: 53 },
  { teamName: "Team J", score: 34 },
  { teamName: "Team F", score: 66 },
];

teams.sort((a, b) => a.score - b.score);

console.log(teams);

//splice method
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(3, 1, "May", "Dec");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

//start index
//delete cound from that index
//add element from that index

const arr = [1, 2, 3, 4];
let v = 20;
console.log((v = 10));
console.log(v);
console.log(arr.push(5));
console.log(arr);
