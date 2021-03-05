"use strict";
/**
 *This function converts array of string to one single string
 * @param {object} arr;
 * @return{String};
 */
function splitArray(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      str = str + arr[i];
    } else str = str + arr[i] + "_";
  }
  return str;
}
let arr = ["hello", "world", "gere"];
console.log(splitArray(arr));
