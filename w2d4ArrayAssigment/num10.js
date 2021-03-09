"use strict";
/**
 *This function that takes two parameters, an array, and avalue to
* search in the array and return an array result with three values.
*boolean,first index,last index
 * @param {object} arr ;
 * @param {number} n ;
 * @return{String};
 */
function enhancedIncludes(arr, n) {
  let newArr=[];
  let firstIndex = -1;
  let lastIndex = -1;
  let index = -1;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      index = i;
      count++;
    }
    if (count === 1) firstIndex = index;
    if (count > 1) lastIndex = index;
  }
  if (firstIndex > -1){
    newArr.push(true);
    newArr.push(firstIndex);
    newArr.push(lastIndex);
  }
  else{
    newArr.push(false);
    newArr.push(firstIndex);
    newArr.push(lastIndex);
  }
   return newArr;
}
let arr = [2, 4, 3, 3, 3, 2, 5, 3,9];
console.log(enhancedIncludes(arr, 6));
console.log(enhancedIncludes(arr, 3));
console.log(enhancedIncludes(arr, 9));
console.log(enhancedIncludes(arr, 4));
