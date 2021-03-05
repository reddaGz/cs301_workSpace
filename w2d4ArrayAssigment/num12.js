"use strict";
let prompt = require("prompt-sync")();
//let userInput = prompt("Enter number by separating ,: ");
/**
 * This function recievs input from user by separating , filtered out negative number
 * @param {number} arr  user input
 * @return{array} return array;
 */
function filterOutNegative(arr){
 let array=arr.split(",");
for(let i=0;i<array.length;i++){
    if(parseInt(array[i])<0)
      array.splice(i,i);
}
return array;
}
/**
 * This is function maps to  sum of the digit from the given elements of array
 * @param {Array} array input array;
 * @return{Array} return 
 */
function mapToSumOfDigit(array){
let fiterResult=filterOutNegative(array);
let mapArray=[];
for(let i=0;i<fiterResult.length;i++){
    let n=digitSum(parseInt(fiterResult[i]));
    mapArray.push(n);
}
return mapArray;
}
/**
 * This is function returns sum of the digits
 * @param {number} n input digit;
 * @return{number} return sum of digits
 */
function digitSum(n){
    let sumDigit=0;
    while(n>0){
        sumDigit+=n%10;
        n=Math.floor(n/10)
    }
    return sumDigit;
}
/**
 * This is function that reduce to sum of each element after mapping to thier sum of digits
 * @param {string} arr user input number
 * @return{number}  return the sum each element;
 */
function reduce(arr){
    let reduArr=mapToSumOfDigit(arr);
    let sum=0;
    for(let i=0;i<reduArr.length;i++){
       sum+=reduArr[i]
    }
    return sum;
}
let userInput1="13,2,33,-67,8";
console.log(filterOutNegative(userInput1));
console.log(mapToSumOfDigit(userInput1));
console.log(reduce(userInput1));

