/*
5. When you exercise to strengthen your heart, you 
should maintain your heart rate within a range. To find that 
range, subtract your age from 220. This difference is your maximum 
heart rate per minute. Your heart simply will not beat faster than this 
maximum (220 − age). When exercising to strengthen your heart, you should keep 
your heart rate between 65% and 85% of your heart’s maximum. Write a JavaScript 
program that asks for a person’s age and computes and outputs the slowest 
and fastest rates necessary to strengthen his heart.*/ 
let prompt=require('prompt-sync')();
let n =prompt('enter your age:' );
let age=parseInt(n);
let computeAge=220-age;
let heartRateMax=(computeAge*0.85).toFixed(2);
let heartRateMin=(computeAge*0.65).toFixed(2);
console.log('Fastest heart beat rate during exercising: '+heartRateMax);
console.log('Slowest heart beat rate during exercising: '+heartRateMin);
