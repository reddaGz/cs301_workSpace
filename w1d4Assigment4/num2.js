"use strict"
let prompt=require("prompt-sync")();
let userInput=+prompt("Enter number to compute factorial: ");
let result=1;
if(userInput===0||userInput==1)
  result=1;
for(let i=userInput;i>1;i--){ 
result*=i;
}
console.log("factorial of "+userInput+"is :"+result);