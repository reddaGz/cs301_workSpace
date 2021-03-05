"use strict";
/**
 * This function is reverse array using slice method
 * @param {Array} arr input parameter
 * @return{Array} reverse array
 */
function reveseArray(arr) {
  let array = [];
  let length = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    let n = arr.slice(i, i + 1);
    array.unshift(n);
  }
  return array;
}
let arr = [6, 2, 3, 4];
console.log(reveseArray(arr));
