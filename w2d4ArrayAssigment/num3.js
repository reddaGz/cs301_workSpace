"use strict";
/**Write a function to rotate the elements in an array to the left by 1. */
/**
 * This is simple function that rotate any given array to left by 1
 * @param {Object} arr Given array
 * @return{Object} return rotated array
 */
function rotateLeft1(arr){
    let firstValue=arr[0];
    for(let i=0;i<arr.length;i++){
       arr[i]=arr[i+1];
    }
    arr[arr.length-1]=firstValue;
    return arr;
}

let arr=[1,2,3,4,5];
console.log(rotateLeft1(arr));