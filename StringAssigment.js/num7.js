"use strict";
/**
 *
 * @param {Array} arr ;
 * @return{Number};
 */
function getAverage(arr) {
  let sum = 0;
  for (let user of arr) sum += user.age;
  return sum / arr.length;
}

let array = [
  {
    name: "abc",
    age: 20,
  },
  { name: "xyz", age: 10 },
];
console.log(getAverage(array));
