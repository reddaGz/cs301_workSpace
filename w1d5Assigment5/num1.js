
let prompt = require("prompt-sync")();
let user_input = +prompt("Enter any number to check prime op not: ");
console.log(checkPrime(user_input))
function checkPrime(n) {
  if (n == 1) return true;
  let i;
  for (i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  if (i == n) return true;
}
