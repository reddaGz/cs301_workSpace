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
  let n = arr1.length + arr2.length;
  for (let i = 0; i < n; i++) {
    let smaller = arr1[0] < arr2[0] ? arr1 : arr2;
    array.push(smaller.shift());
  }
  return array;
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

let arr = [1, 2, 4, 5, 8];
let arr2 = [3, 5, 6, 8, 11, 34, 56];
console.log(mergeArray(arr, arr2));
//console.log(arr)
