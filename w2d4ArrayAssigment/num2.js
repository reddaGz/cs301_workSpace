"use strict";
/**2. Write a function named getMiddle that returns the 
 * value of the middle element in an array. If the array has an even 
 * number of elements, then this function must return 
 * the average of the two middle elements. */
/**
 * This is simple function that returns the middle element
 * @param {object} arr array
 * @return{Object} return middle element
 */
function getMiddle(arr){
    let index=Math.floor(arr.length/2);
    if(isEven(arr.length)){
        return (arr[index]+arr[index+1])/2;
    }
    return arr[index];
}
/**
 * This is simple function return true if even length and false if odd length
 * @param {number} length  Length of array
 * @return{boolean}  return true or false
 */
function isEven(length){
    return length%2===0;
}