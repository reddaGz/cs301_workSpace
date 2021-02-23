/*1. Write a JavaScript program 
that ask a user for a volume in quarts 
then converts that value in 
liters.*/
let prompt=require('prompt-sync')();
let quarts=prompt('Enter the volume with a  quarts   ');//Q1
let liter=parseFloat(quarts);
console.log('The volume in litter='+liter*0.95)
