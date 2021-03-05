"use strict";
/**Write a function to rotate the elements in an array to the right by 1. */
/**
 * This is simple function that rotate any given array to right by 1
 * @param {Object} arr Given array
 * @return{Object} return rotated array
 */
function rotateRight1(arr){
    let lastValue=arr[arr.length-1];
 for(let i=arr.length-1;i>0;i--){
    arr[i]=arr[i-1];
 }
 arr[0]=lastValue;
 return arr;
}
let arr=[1,2,3,4,5];
console.log(rotateRight1(arr));