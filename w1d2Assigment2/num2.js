/*2. Write a JavaScript program that asks a user for a 
distance in kilometers and then convert that value in miles.*/
let prompt=require('prompt-sync')();
let distanceKm=prompt('Enter the distance with kilometer   ');//Q2
let d=parseFloat(distanceKm);
let distanceMile =d*0.62;
console.log('The distance in miles='+distanceMile);