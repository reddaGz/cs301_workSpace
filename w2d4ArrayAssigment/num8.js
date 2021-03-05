"use strict";
/**
 * This function that merges two sorted arrays into one single sorted array.
 *  Make use of shift and push array methods.
 * @param {Array} arr1 ;
 * @param {Array} arr2;
 * @return{Array} ;
 */
function mergeArray(arr1, arr2) {
  let array = [];
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2.shift());
  }
  return sortArray(arr1);
}
/**
 *This function uses to sort array in decending order
 * @param {object} arr;
 * @return {object};
 */
function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

let arr = [3, 5, 2];
let arr2 = [3, 7, 1];
console.log(mergeArray(arr, arr2));
//console.log(arr)
