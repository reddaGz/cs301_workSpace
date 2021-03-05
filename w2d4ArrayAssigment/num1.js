"use strict";
/**
 * 
*1. Write a function addend(arr) that accepts an array 
*of numbers as parameters 
*and returns the sum of firs and last elements of the array.
 */
/**
 * This is simple function that returns sum of first and last index out of any given array
 * @param {object} arr  array
 * @return{Object} return value
 */
 function addend(arr){
     return arr[0]+arr[arr.length-1];
 }

 let arr=[5,7,2,3,4];
 console.log(addend(arr));
