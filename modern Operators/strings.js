const message = "Hello my name is Yaseen";

console.log(message.padStart(29, " ").padEnd(33, " ").trim());

function maskedCreditCard(n) {
  const id = n + "";
  const last = id.slice(-4);
  const mask = last.padStart(id.length > 10 ? id.length : 10, "*");
  console.log(mask);
}

maskedCreditCard("0987654321aaaa1234a5");
maskedCreditCard(21212121212121212);
maskedCreditCard(12121);
