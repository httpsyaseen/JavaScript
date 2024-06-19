function oneWord(str) {
  return str.replace(/ /g, "");
}

function firstWord(str) {
  const [first, ...other] = str.split(" ");
  console.log([first, ...other]);
  return [first.toUpperCase(), ...other].join(" ");
}

//High order function / Callback
function transform(str, fn) {
  console.log(`Orignal String: ${str}`);
  const result = fn(str);
  console.log(`Modifies String ${result}`);
  console.log(`Converted by Function ${fn.name}`);
}

transform("Yaseen is my name.", firstWord);
