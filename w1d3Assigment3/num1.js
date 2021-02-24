/**
 * 1. Write a program that helps a user 
 * choose the correct footwear for the
 *  day’s weather based on the table 
 * shown below. If the user enters any other 
 * weather type, your program should
 *  output “sneakers”
 * 
 */
let prompt=require('prompt-sync')();
let weather=prompt('enter the weather condition: ');
switch(weather) {
  case "hot":
    console.log('The footwear is sandals');
    break;
  case "rain":
    console.log('The footwear is galoshes');
    break;
  case "snow":
    console.log('The footwear is boots');
    break;
  default:
    console.log('The footwear is sneakers');
    break;
}