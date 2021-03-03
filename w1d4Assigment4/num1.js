"use strict"

let prompt = require("prompt-sync")();
let userInput = +prompt("Enter any number to check prime op not: ");
let count = 0;
for (let i = 2; i < userInput; i++) {
  if (userInput % i === 0) count++;
  if (count > 0) break;
}
if (count == 0) {
  console.log(userInput + " is prime number ");
} else {
  console.log(userInput + " is not prime number");
}
