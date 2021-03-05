"use strict";
//Write a function that takes an array of strings and
//returns array of palindrome strings only
/**
 *
 * @param {array} arr input array of string;
 * @return{array} return palindrom only;
 */
function palindromString(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPalindrom(arr[i])) array.push(arr[i]);
  }
  return array;
}
/**
 *
 * @param {string} str input string;
 * @return{bollean} return booelan
 */
function isPalindrom(str) {
  let j = str.length - 1;
  for (let i = 0; i < j; i++) {
    if (str[i] !== str[j--]) return false;
  }
  return true;
}
let arr = ["hello", "world","mom","madam"];
console.log(palindromString(arr));
