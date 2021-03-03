"use strict"

let prompt = require("prompt-sync")();
let user_input = +prompt("Enter any number to check prime op not: ");
let count = 0;
for (let i = 2; i < user_input; i++) {
  if (user_input % i === 0) count++;
  if (count > 0) break;
}
if (count == 0) {
  console.log(user_input + " is prime number ");
} else {
  console.log(user_input + " is not prime number");
}
