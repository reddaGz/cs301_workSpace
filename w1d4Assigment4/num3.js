/**
 * 3. Write a JavaScript program that gives the user three tries to guess
 *  the correct pin of the account. You set the pin as a constant.
 * When correct display “Correct, welcome back.” When incorrect display
 * “Incorrect, try again.”.
 *  When run out of tries display “Sorry but you have been locked out.”
 */
let prompt = require("prompt-sync")();
const pin = "123g";
const count = 3;
let user_guess = prompt("Enter you guess for the pin :");
let message;
let i = 1;
while (i < count) {
  if (user_guess === "123g") {
    message = "Correct, welcome back.";
    break;
  }
  if (user_guess !== "123g") 
  user_guess = prompt("Incorrect, try again: ");
  i++;
}
if (i === 3) message = "Sorry but you have been locked out.";
console.log(message);
