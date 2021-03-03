"use strict"
let prompt = require("prompt-sync")();
let userInput = +prompt("Enter any number to check prime op not: ");
console.log(checkPrime(userInput))
/**
 * 
 * @param {number} num  is the input parametre
 * @param{}
 * @return{bollean} this is the return values
 */
function checkPrime(num) {
  if (num == 2) return true;
  let i;
  let n=Math.ceil(num/2)
  for (i = 2; i < n; i++) {
    if (num % i == 0) return false;
  }
  if (i == n) return true;
}
