"use strict";
/**
 *
 * @param {String} str1;
 * @param {String} str2;
 * @return{string};
 */
function suffix(str1, str2) {
  let suffix1 = str1.substring(str1.length - 3);
  let sufffix2 = str2.substring(str2.length - 3);
  if (suffix1 === sufffix2) return suffix1;
}

let str1 = "worker";
let str2 = "worgftbvrker";
console.log(suffix(str1, str2));
